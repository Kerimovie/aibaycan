import type { MediaType, UploadUrlResponse } from '@aibaycan/shared';
import { useState } from 'react';
import { api } from '@/lib/api';
import { mediaHooks } from '@/features/hooks';

/** Fayl MIME → MediaType */
function mediaTypeFromMime(mime: string): MediaType {
  if (mime.startsWith('image/')) return 'IMAGE';
  if (mime.startsWith('video/')) return 'VIDEO';
  return 'DOCUMENT';
}

/** Şəkil ölçülərini oxu (image üçün) */
function readImageDimensions(file: File): Promise<{ width: number; height: number } | null> {
  return new Promise((resolve) => {
    if (!file.type.startsWith('image/')) {
      resolve(null);
      return;
    }
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };
    img.src = url;
  });
}

interface UploadState {
  uploading: boolean;
  error: string | null;
}

/**
 * Media upload hook — presigned URL axını:
 * (1) /upload-url al → (2) R2-yə birbaşa PUT → (3) metadata DB-yə yaz.
 */
export function useUpload() {
  const [state, setState] = useState<UploadState>({ uploading: false, error: null });
  // metadata create — react-query invalidation media list-i yeniləyir
  const createMeta = mediaHooks.useCreate();

  async function upload(file: File): Promise<boolean> {
    setState({ uploading: true, error: null });
    try {
      // (1) presigned URL
      const { uploadUrl, key, publicUrl } = await api.post<UploadUrlResponse>(
        '/admin/media/upload-url',
        { fileName: file.name, contentType: file.type, sizeBytes: file.size },
      );

      // (2) R2-yə birbaşa PUT (credentials: omit — presigned URL öz-özünə auth)
      const putRes = await fetch(uploadUrl, {
        method: 'PUT',
        headers: { 'content-type': file.type },
        body: file,
      });
      if (!putRes.ok) throw new Error('R2-yə yükləmə uğursuz oldu');

      // (3) metadata DB-yə
      const dims = await readImageDimensions(file);
      await createMeta.mutateAsync({
        url: publicUrl,
        key,
        type: mediaTypeFromMime(file.type),
        mimeType: file.type,
        fileName: file.name,
        sizeBytes: file.size,
        width: dims?.width ?? null,
        height: dims?.height ?? null,
      });

      setState({ uploading: false, error: null });
      return true;
    } catch (err) {
      setState({ uploading: false, error: err instanceof Error ? err.message : 'Yükləmə xətası' });
      return false;
    }
  }

  return { ...state, upload };
}

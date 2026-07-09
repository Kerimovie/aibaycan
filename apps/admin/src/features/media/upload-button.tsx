import { Button } from '@aibaycan/ui';
import { Upload } from 'lucide-react';
import { useRef } from 'react';
import { useUpload } from './use-upload';

/** Fayl seçib R2-yə yükləyən düymə (gizli native input — QADAĞAN istisna: file picker) */
export function UploadButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { uploading, error, upload } = useUpload();

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) await upload(file);
    if (inputRef.current) inputRef.current.value = '';
  }

  return (
    <div className="flex items-center gap-3">
      {error && <span className="text-sm text-danger">{error}</span>}
      <Button onClick={() => inputRef.current?.click()} disabled={uploading}>
        <Upload size={16} /> {uploading ? 'Yüklənir…' : 'Yüklə'}
      </Button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*,application/pdf"
        onChange={onChange}
        className="hidden"
      />
    </div>
  );
}

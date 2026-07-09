import { randomUUID } from 'node:crypto';
import { DeleteObjectCommand, PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { env } from '../env.js';
import { HttpError } from './http.js';

/**
 * Cloudflare R2 (S3-uyğun) client + presigned URL helper (docs/09 #011).
 * Client birbaşa R2-yə yükləyir (presigned PUT) — fayl serverdən keçmir.
 */

let client: S3Client | null = null;

/** R2 konfiq olunubmu — upload endpoint-lərində yoxlanır */
export function isR2Configured(): boolean {
  return Boolean(
    env.R2_ACCOUNT_ID &&
      env.R2_ACCESS_KEY_ID &&
      env.R2_SECRET_ACCESS_KEY &&
      env.R2_BUCKET &&
      env.R2_PUBLIC_URL,
  );
}

function getClient(): S3Client {
  if (!isR2Configured()) {
    throw new HttpError('INTERNAL', 'R2 storage konfiqurasiya olunmayıb');
  }
  client ??= new S3Client({
    region: 'auto',
    endpoint: `https://${env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: env.R2_ACCESS_KEY_ID as string,
      secretAccessKey: env.R2_SECRET_ACCESS_KEY as string,
    },
  });
  return client;
}

/** Fayl adından təhlükəsiz R2 açarı yaradır (kolliziyasız) */
export function buildObjectKey(fileName: string): string {
  const ext = fileName.includes('.') ? fileName.split('.').pop() : '';
  const safe = randomUUID();
  return ext ? `media/${safe}.${ext}` : `media/${safe}`;
}

/** Presigned PUT URL — client bunu istifadə edib R2-yə birbaşa yükləyir */
export async function createUploadUrl(input: {
  key: string;
  contentType: string;
}): Promise<{ uploadUrl: string; publicUrl: string }> {
  const cmd = new PutObjectCommand({
    Bucket: env.R2_BUCKET,
    Key: input.key,
    ContentType: input.contentType,
  });
  const uploadUrl = await getSignedUrl(getClient(), cmd, { expiresIn: 600 }); // 10 dəq
  const publicUrl = `${env.R2_PUBLIC_URL}/${input.key}`;
  return { uploadUrl, publicUrl };
}

/** R2 obyektini sil (media DB-dən silinəndə) */
export async function deleteObject(key: string): Promise<void> {
  await getClient().send(new DeleteObjectCommand({ Bucket: env.R2_BUCKET, Key: key }));
}

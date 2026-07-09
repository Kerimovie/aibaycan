import { Resend } from 'resend';
import { env } from '../env.js';

/**
 * Email göndərmə — provider-agnostik interfeys (hazırda Resend).
 * Konfiq yoxdursa `isEmailConfigured()` false, göndərmə səssiz atlanır.
 *
 * ⛔ Email göndərmə HEÇ VAXT əsas əməliyyatı (məs. lead yazılması) bloklamamalıdır —
 * çağıran tərəf best-effort istifadə edir və xətanı loglayır (no silent catch).
 */

export interface EmailMessage {
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}

let client: Resend | null = null;

export function isEmailConfigured(): boolean {
  return Boolean(env.RESEND_API_KEY && env.LEAD_NOTIFY_FROM && env.LEAD_NOTIFY_TO);
}

/** Bildiriş alıcıları (vergüllə ayrılmış env) */
export function notifyRecipients(): string[] {
  return (env.LEAD_NOTIFY_TO ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function getClient(): Resend {
  client ??= new Resend(env.RESEND_API_KEY);
  return client;
}

/** Email göndər. Konfiq yoxdursa false qaytarır (xəta atmır). */
export async function sendEmail(message: EmailMessage): Promise<boolean> {
  if (!isEmailConfigured()) return false;

  const { error } = await getClient().emails.send({
    from: env.LEAD_NOTIFY_FROM as string,
    to: message.to,
    subject: message.subject,
    html: message.html,
    ...(message.replyTo ? { replyTo: message.replyTo } : {}),
  });

  if (error) {
    throw new Error(`Resend xətası: ${error.message}`);
  }
  return true;
}

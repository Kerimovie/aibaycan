import { isEmailConfigured, notifyRecipients, sendEmail } from './email.js';

/** HTML escape — lead məzmunu istifadəçidən gəlir (HTML injection qorunması) */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface LeadPayload {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  interestedIn?: string | null;
  budgetRange?: string | null;
  message: string;
  source?: string | null;
  pageUrl?: string | null;
}

function row(label: string, value?: string | null): string {
  if (!value) return '';
  return `<tr><td style="padding:4px 12px 4px 0;color:#64748b">${escapeHtml(label)}</td><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`;
}

function buildHtml(lead: LeadPayload): string {
  return `<div style="font-family:system-ui,sans-serif;max-width:600px">
  <h2 style="color:#0f172a">Yeni sorğu — aibaycan.az</h2>
  <table style="border-collapse:collapse;font-size:14px">
    ${row('Ad', lead.name)}
    ${row('Email', lead.email)}
    ${row('Telefon', lead.phone)}
    ${row('Şirkət', lead.company)}
    ${row('Maraqlandığı xidmət', lead.interestedIn)}
    ${row('Büdcə', lead.budgetRange)}
    ${row('Mənbə', lead.source)}
    ${row('Səhifə', lead.pageUrl)}
  </table>
  <h3 style="color:#0f172a;margin-top:20px">Mesaj</h3>
  <p style="white-space:pre-wrap;font-size:14px">${escapeHtml(lead.message)}</p>
</div>`;
}

/**
 * Yeni lead bildirişi — BEST-EFFORT.
 * Email konfiq olunmayıbsa və ya göndərmə uğursuz olsa, çağıran tərəf
 * davam edir (lead onsuz da DB-yə yazılıb). Xəta loglanır (no silent catch).
 */
export async function notifyNewLead(lead: LeadPayload): Promise<void> {
  if (!isEmailConfigured()) return;

  try {
    await sendEmail({
      to: notifyRecipients(),
      subject: `Yeni sorğu: ${lead.name}${lead.company ? ` (${lead.company})` : ''}`,
      html: buildHtml(lead),
      replyTo: lead.email, // komanda birbaşa cavab verə bilsin
    });
  } catch (error) {
    console.error('[lead] bildiriş emaili göndərilmədi:', error);
  }
}

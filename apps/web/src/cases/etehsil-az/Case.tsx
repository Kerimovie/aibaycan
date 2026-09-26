// eTəhsil case study (/[locale]/projects/etehsil-az): a day at a sample education centre, told in chapter badges from
// 07:45 to 21:00. Port of Atlas `src/components/cases/etehsil/Case.astro`.
// Stylesheet order = Atlas: kit (via CaseLayout) → case primitives (etehsil.css) → chapter components.
import { CaseLayout } from '../_shared/CaseLayout';
import './etehsil.css';
import { Chapter } from '../_shared/Chapter';
import type { Locale } from '../types';
import { Attendance } from './Attendance';
import { Challenge } from './Challenge';
import { Contracts } from './Contracts';
import { Engineering } from './Engineering';
import { EtehsilEffects } from './EtehsilEffects';
import { Exams } from './Exams';
import { HeroVisual } from './HeroVisual';
import { etehsilCopy } from './i18n';
import { Owner } from './Owner';
import { Payments } from './Payments';
import { Schedule } from './Schedule';

export default function EtehsilCase({ locale }: { locale: Locale }) {
  const t = etehsilCopy[locale];
  const { challenge, schedule, attendance, payments, contracts, exams, owner, engineering } = t;

  const rail = [challenge, schedule, attendance, payments, contracts, exams, owner, engineering].map((chapter) => ({
    id: chapter.id,
    label: t.railLabels[chapter.id],
  }));

  return (
    <CaseLayout locale={locale} slug="etehsil-az" copy={t} rail={rail} heroVisual={<HeroVisual t={t} />}>
      {/* 07:45 · before */}
      <Chapter
        id={challenge.id}
        tone="paper"
        km={challenge.km}
        eyebrow={challenge.eyebrow}
        title={challenge.title}
        accent={challenge.accent}
        lead={challenge.lead}
      >
        <Challenge c={challenge} />
      </Chapter>

      {/* 08:00 · schedule */}
      <Chapter
        id={schedule.id}
        tone="navy"
        km={schedule.km}
        eyebrow={schedule.eyebrow}
        title={schedule.title}
        accent={schedule.accent}
        lead={schedule.lead}
      >
        <Schedule c={schedule} />
      </Chapter>

      {/* 10:30 · attendance and parents */}
      <Chapter
        id={attendance.id}
        km={attendance.km}
        eyebrow={attendance.eyebrow}
        title={attendance.title}
        accent={attendance.accent}
        lead={attendance.lead}
      >
        <Attendance c={attendance} />
      </Chapter>

      {/* 12:30 · cash desk */}
      <Chapter
        id={payments.id}
        tone="navy"
        km={payments.km}
        eyebrow={payments.eyebrow}
        title={payments.title}
        accent={payments.accent}
        lead={payments.lead}
      >
        <Payments c={payments} />
      </Chapter>

      {/* 14:00 · contracts (paper) */}
      <Chapter
        id={contracts.id}
        tone="paper"
        km={contracts.km}
        eyebrow={contracts.eyebrow}
        title={contracts.title}
        accent={contracts.accent}
        lead={contracts.lead}
      >
        <Contracts c={contracts} />
      </Chapter>

      {/* 16:00 · exams */}
      <Chapter id={exams.id} km={exams.km} eyebrow={exams.eyebrow} title={exams.title} accent={exams.accent} lead={exams.lead}>
        <Exams c={exams} />
      </Chapter>

      {/* 21:00 · owner */}
      <Chapter
        id={owner.id}
        tone="navy"
        km={owner.km}
        eyebrow={owner.eyebrow}
        title={owner.title}
        accent={owner.accent}
        lead={owner.lead}
      >
        <Owner c={owner} />
      </Chapter>

      {/* under the hood */}
      <Chapter
        id={engineering.id}
        km={engineering.km}
        eyebrow={engineering.eyebrow}
        title={engineering.title}
        accent={engineering.accent}
        lead={engineering.lead}
      >
        <Engineering c={engineering} />
      </Chapter>

      <EtehsilEffects />
    </CaseLayout>
  );
}

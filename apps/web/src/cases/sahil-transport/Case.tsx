// Sahil Transport case study (/[locale]/projects/sahil-transport): one day of a road-freight fleet, from the morning
// roll-out to the morning report. Chapter badges are clock times of that day; every mockup uses sample data.
// Port of Atlas `src/components/cases/sahil-transport/Case.astro`.
// Stylesheet order = Atlas: kit (via CaseLayout) → chapter components → this page's own scoped block (Case.css).
// Atlas has no `src/styles/cases/sahil-transport.css`.
import { CaseLayout } from '../_shared/CaseLayout';
import { Chapter } from '../_shared/Chapter';
import { DefinitionRows } from '../_shared/DefinitionRows';
import { FeatureGrid } from '../_shared/FeatureGrid';
import { TagList } from '../_shared/TagList';
import type { Locale } from '../types';
import { ChallengeScene } from './ChallengeScene';
import { ErpBridge } from './ErpBridge';
import { FleetDashboard } from './FleetDashboard';
import { HeroConsole } from './HeroConsole';
import { sahilTransportCopy } from './i18n';
import { InvoiceReader } from './InvoiceReader';
import { ReconcileMatch } from './ReconcileMatch';
import { ReportWorkbook } from './ReportWorkbook';
import { SahilTransportEffects } from './SahilTransportEffects';
import { SignalFlow } from './SignalFlow';
import { StopTimeline } from './StopTimeline';
import { WaitingClock } from './WaitingClock';
import './Case.css';

export default function SahilTransportCase({ locale }: { locale: Locale }) {
  const t = sahilTransportCopy[locale];
  const { challenge, fleet, stops, waiting, invoices, reconcile, reports, engineering, erp } = t;

  const chapters = [challenge, fleet, stops, waiting, invoices, reconcile, reports, engineering, erp];
  const rail = chapters.map((chapter) => ({ id: chapter.id, label: t.railLabels[chapter.id] }));

  return (
    <CaseLayout locale={locale} slug="sahil-transport" copy={t} rail={rail} heroLayout="split" heroVisual={<HeroConsole t={t} />}>
      {/* Before · the challenge */}
      <Chapter
        id={challenge.id}
        km={challenge.badge}
        eyebrow={challenge.eyebrow}
        title={challenge.title}
        accent={challenge.accent}
        lead={challenge.lead}
      >
        <ChallengeScene challenge={challenge} className="mt-14 lg:mt-20" />
      </Chapter>

      {/* 06:00 · the fleet in real time */}
      <Chapter
        id={fleet.id}
        tone="navy"
        km={fleet.badge}
        eyebrow={fleet.eyebrow}
        title={fleet.title}
        accent={fleet.accent}
        lead={fleet.lead}
        bleed
      >
        <FleetDashboard screen={fleet.screen} className="mt-14 lg:mt-20" />
        <div className="container-page">
          <FeatureGrid items={fleet.features} columns={3} className="mt-14" />
        </div>
      </Chapter>

      {/* 09:40 · stop classification */}
      <Chapter id={stops.id} km={stops.badge} eyebrow={stops.eyebrow} title={stops.title} accent={stops.accent} lead={stops.lead}>
        <StopTimeline stops={stops} className="mt-14 lg:mt-20" />
      </Chapter>

      {/* 11:40 · demurrage */}
      <Chapter
        id={waiting.id}
        tone="navy"
        km={waiting.badge}
        eyebrow={waiting.eyebrow}
        title={waiting.title}
        accent={waiting.accent}
        lead={waiting.lead}
      >
        <WaitingClock waiting={waiting} className="mt-14 lg:mt-20" />
        <FeatureGrid items={waiting.features} columns={3} className="mt-16" />
      </Chapter>

      {/* 14:30 · AI invoice reading (paper) */}
      <Chapter
        id={invoices.id}
        tone="paper"
        km={invoices.badge}
        eyebrow={invoices.eyebrow}
        title={invoices.title}
        accent={invoices.accent}
        lead={invoices.lead}
      >
        <InvoiceReader invoices={invoices} className="mt-14 lg:mt-20" />
      </Chapter>

      {/* 23:00 · three-way reconciliation */}
      <Chapter
        id={reconcile.id}
        km={reconcile.badge}
        eyebrow={reconcile.eyebrow}
        title={reconcile.title}
        accent={reconcile.accent}
        lead={reconcile.lead}
      >
        <ReconcileMatch board={reconcile.board} className="mt-14 lg:mt-20" />
        <FeatureGrid items={reconcile.features} columns={3} className="mt-14" />
      </Chapter>

      {/* 08:00 · reports and the bot */}
      <Chapter
        id={reports.id}
        tone="navy"
        km={reports.badge}
        eyebrow={reports.eyebrow}
        title={reports.title}
        accent={reports.accent}
        lead={reports.lead}
      >
        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] gap-12 lg:mt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
          <div className="min-w-0 lg:sticky lg:top-28">
            <ReportWorkbook workbook={reports.workbook} />
          </div>
          <div>
            <h3 className="cine-eyebrow">{reports.tabsTitle}</h3>
            <DefinitionRows items={reports.tabNotes} className="mt-4" />
            <h3 className="cine-eyebrow mt-10">{reports.chartsTitle}</h3>
            <TagList tags={reports.charts} className="mt-4" />
            <div className="st-botnote mt-10">
              <h3 className="st-botnote__title">{reports.bot.title}</h3>
              <p className="cine-text mt-2">{reports.bot.text}</p>
            </div>
          </div>
        </div>
      </Chapter>

      {/* How it is built */}
      <Chapter id={engineering.id} eyebrow={engineering.eyebrow} title={engineering.title} accent={engineering.accent} lead={engineering.lead}>
        <SignalFlow flow={engineering.flow} className="mt-14 lg:mt-20" />
        <FeatureGrid items={engineering.principles} columns={3} className="mt-16" />
      </Chapter>

      {/* What comes next (paper). Atlas linked its `work/logistics-erp` product page; Aibaycan has none → /contact. */}
      <Chapter id={erp.id} tone="paper" eyebrow={erp.eyebrow} title={erp.title} accent={erp.accent} accentLang="en" lead={erp.lead}>
        <ErpBridge erp={erp} productHref="/contact" className="mt-14 lg:mt-20" />
      </Chapter>

      <SahilTransportEffects />
    </CaseLayout>
  );
}

// Cavably case study (/[locale]/projects/cavably): one customer's message followed from 23:40 to Monday morning, told in
// chat-style chapter timestamps. Port of Atlas `src/components/cases/cavably/Case.astro`.
// Stylesheet order = Atlas: kit (via CaseLayout) → case primitives (cavably.css) → chapter components → Case.css.
import { CaseLayout } from '../_shared/CaseLayout';
import './cavably.css';
import { Chapter } from '../_shared/Chapter';
import { DefinitionRows } from '../_shared/DefinitionRows';
import { FeatureGrid } from '../_shared/FeatureGrid';
import type { Locale } from '../types';
import { HeroInbox } from './HeroInbox';
import { MessageClock } from './MessageClock';
import { InboxScreen } from './InboxScreen';
import { AiStory } from './AiStory';
import { FlowBuilder } from './FlowBuilder';
import { BookingBoard } from './BookingBoard';
import { GrowthBoard } from './GrowthBoard';
import { AnalyticsBoard } from './AnalyticsBoard';
import { EnterpriseControls } from './EnterpriseControls';
import { IntegrationHub } from './IntegrationHub';
import { CavablyEffects } from './CavablyEffects';
import { cavablyCopy } from './i18n';
import './Case.css';

export default function CavablyCase({ locale }: { locale: Locale }) {
  const t = cavablyCopy[locale];
  const { challenge, inbox, ai, flows, bookings, growth, analytics, engineering } = t;

  // Page order; the chapter timestamps follow one customer's message from 23:40 to Monday morning.
  const rail = [challenge, inbox, ai, flows, bookings, growth, analytics, engineering].map((chapter) => ({
    id: chapter.id,
    label: t.railLabels[chapter.id],
  }));

  return (
    <CaseLayout locale={locale} slug="cavably" copy={t} rail={rail} heroVisual={<HeroInbox t={t} />}>
      {/* 23:40 · the challenge */}
      <Chapter
        id={challenge.id}
        tone="navy"
        km={challenge.km}
        eyebrow={challenge.eyebrow}
        title={challenge.title}
        accent={challenge.accent}
        lead={challenge.lead}
        className="cav-chapter"
      >
        <MessageClock t={t} className="mt-14 lg:mt-20" />
        <ol className="cav-pains mt-12 lg:mt-16">
          {challenge.pains.map((pain, index) => (
            <li key={index}>
              <span className="cav-pains__no" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="cav-pains__title">{pain.title}</h3>
              <p className="cine-text">{pain.text}</p>
            </li>
          ))}
        </ol>
      </Chapter>

      {/* 23:40 · shared inbox */}
      <Chapter
        id={inbox.id}
        km={inbox.km}
        eyebrow={inbox.eyebrow}
        title={inbox.title}
        accent={inbox.accent}
        lead={inbox.lead}
        className="cav-chapter"
      >
        <InboxScreen t={t} className="mt-14 lg:mt-20" />
        <FeatureGrid items={inbox.features} columns={3} className="mt-14" />
      </Chapter>

      {/* 23:41 · AI assistant */}
      <Chapter id={ai.id} tone="navy" km={ai.km} eyebrow={ai.eyebrow} title={ai.title} accent={ai.accent} lead={ai.lead} className="cav-chapter">
        <AiStory t={t} className="mt-14 lg:mt-24" />
      </Chapter>

      {/* 23:41 · flow builder */}
      <Chapter
        id={flows.id}
        km={flows.km}
        eyebrow={flows.eyebrow}
        title={flows.title}
        accent={flows.accent}
        lead={flows.lead}
        className="cav-chapter"
      >
        <FlowBuilder t={t} className="mt-14 lg:mt-20" />
        <FeatureGrid items={flows.features} columns={3} className="mt-14" />
      </Chapter>

      {/* 23:42 · bookings and payments */}
      <Chapter
        id={bookings.id}
        tone="paper"
        km={bookings.km}
        eyebrow={bookings.eyebrow}
        title={bookings.title}
        accent={bookings.accent}
        lead={bookings.lead}
        className="cav-chapter"
      >
        <BookingBoard t={t} className="mt-14 lg:mt-20" />
        <FeatureGrid items={bookings.features} columns={4} className="mt-14" />
      </Chapter>

      {/* Day 60 · pipeline, campaigns, loyalty */}
      <Chapter
        id={growth.id}
        tone="navy"
        km={growth.km}
        eyebrow={growth.eyebrow}
        title={growth.title}
        accent={growth.accent}
        lead={growth.lead}
        className="cav-chapter"
      >
        <GrowthBoard t={t} className="mt-14 lg:mt-20" />
        <FeatureGrid items={growth.features} columns={3} className="mt-14" />
      </Chapter>

      {/* Monday 09:00 · analytics */}
      <Chapter
        id={analytics.id}
        tone="paper"
        km={analytics.km}
        eyebrow={analytics.eyebrow}
        title={analytics.title}
        accent={analytics.accent}
        lead={analytics.lead}
        className="cav-chapter"
      >
        <AnalyticsBoard t={t} className="mt-14 lg:mt-20" />
        <FeatureGrid items={analytics.features} columns={3} className="mt-14" />
      </Chapter>

      {/* Engineering and security */}
      <Chapter
        id={engineering.id}
        eyebrow={engineering.eyebrow}
        title={engineering.title}
        accent={engineering.accent}
        lead={engineering.lead}
        className="cav-chapter"
      >
        <EnterpriseControls t={t} className="mt-14 lg:mt-20" />
        <div className="cav-eng mt-16 lg:mt-24">
          <div>
            <h3 className="cine-eyebrow">{engineering.principlesTitle}</h3>
            <DefinitionRows items={engineering.principles} className="mt-6" />
          </div>
          <IntegrationHub t={t} />
        </div>
      </Chapter>

      <CavablyEffects />
    </CaseLayout>
  );
}

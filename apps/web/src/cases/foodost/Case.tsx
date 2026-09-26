// Foodost case study (/[locale]/projects/foodost): one evening of service at a sample restaurant, told through
// Foodost's five apps. Chapter badges are service times (19:52 the internet drops … 09:00 the owner's morning).
// Port of Atlas `src/components/cases/foodost/Case.astro`.
// Stylesheet order = Atlas: kit (via CaseLayout) → case primitives (foodost.css) → chapter components → Case.css.
import { CaseLayout } from '../_shared/CaseLayout';
import './foodost.css';
import { Chapter } from '../_shared/Chapter';
import { FeatureGrid } from '../_shared/FeatureGrid';
import { IntegrationOrbit } from '../_shared/IntegrationOrbit';
import { TagList } from '../_shared/TagList';
import { caseMeta } from '../meta';
import type { Locale } from '../types';
import { HeroPass } from './HeroPass';
import { CounterChaos } from './CounterChaos';
import { PosOffline } from './PosOffline';
import { KitchenDisplay } from './KitchenDisplay';
import { ChannelMerge } from './ChannelMerge';
import { GuestPhone } from './GuestPhone';
import { TechCard } from './TechCard';
import { StockShelf } from './StockShelf';
import { ShiftClose } from './ShiftClose';
import { BranchBoard } from './BranchBoard';
import { AppsDiagram } from './AppsDiagram';
import { FoodostEffects } from './FoodostEffects';
import { foodostCopy } from './i18n';
import './Case.css';

export default function FoodostCase({ locale }: { locale: Locale }) {
  const t = foodostCopy[locale];
  const productName = caseMeta.foodost.items[locale].name;
  const { challenge, pos, kitchen, guest, costing, close, owner, platform } = t;
  const mock = t.mockupAriaLabels;
  const rail = [challenge, pos, kitchen, guest, costing, close, owner, platform].map((chapter) => ({
    id: chapter.id,
    label: t.railLabels[chapter.id],
  }));

  return (
    <CaseLayout locale={locale} slug="foodost" copy={t} rail={rail} heroVisual={<HeroPass t={t} />}>
      {/* Before Foodost: the pile on the counter */}
      <Chapter
        id={challenge.id}
        eyebrow={challenge.eyebrow}
        title={challenge.title}
        accent={challenge.accent}
        lead={challenge.lead}
        className="fd-ch"
      >
        <CounterChaos challenge={challenge} />
      </Chapter>

      {/* 19:52 · the internet drops, the till keeps selling */}
      <Chapter
        id={pos.id}
        tone="navy"
        km={pos.km}
        eyebrow={pos.eyebrow}
        title={pos.title}
        accent={pos.accent}
        lead={pos.lead}
        className="fd-ch"
      >
        <div className="mt-14 grid gap-20 lg:mt-20 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-start lg:gap-16">
          <div className="lg:sticky lg:top-32">
            <PosOffline t={t} locale={locale} label={mock.pos} />
          </div>
          <ul className="cine-features">
            {pos.features.map((feature) => (
              <li key={feature.label} className="cine-feature">
                <h3 className="cine-feature__title">{feature.label}</h3>
                <p className="cine-feature__text">{feature.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </Chapter>

      {/* 20:14 · every channel on one kitchen screen */}
      <Chapter
        id={kitchen.id}
        km={kitchen.km}
        eyebrow={kitchen.eyebrow}
        title={kitchen.title}
        accent={kitchen.accent}
        lead={kitchen.lead}
        className="fd-ch"
      >
        <div className="mt-14 lg:mt-20">
          <KitchenDisplay t={t} label={mock.kitchen} />
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
          <ChannelMerge merge={kitchen.merge} />
          <FeatureGrid items={kitchen.features} columns={2} />
        </div>
      </Chapter>

      {/* 20:31 · the guest orders with the AI waiter */}
      <Chapter
        id={guest.id}
        tone="navy"
        km={guest.km}
        eyebrow={guest.eyebrow}
        title={guest.title}
        accent={guest.accent}
        lead={guest.lead}
        className="fd-ch"
      >
        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <GuestPhone t={t} locale={locale} label={mock.guest} />
          <div>
            <h3 className="cine-eyebrow">{guest.stepsTitle}</h3>
            <ol className="fd-steps mt-6">
              {guest.steps.map((step, index) => (
                <li key={step.title} data-fd-step="" data-active={index === 0 ? '' : undefined}>
                  <span className="fd-steps__no" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="fd-steps__title">{step.title}</h4>
                    <p className="fd-steps__text">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <TagList tags={guest.tags} className="mt-8" />
          </div>
        </div>
      </Chapter>

      {/* 21:05 · recipes, food cost and stock (paper) */}
      <Chapter
        id={costing.id}
        tone="paper"
        km={costing.km}
        eyebrow={costing.eyebrow}
        title={costing.title}
        accent={costing.accent}
        lead={costing.lead}
        className="fd-ch fd-torn"
      >
        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12">
          <TechCard t={t} locale={locale} label={mock.costing} />
          <StockShelf t={t} locale={locale} label={mock.stock} />
        </div>
        <FeatureGrid items={costing.features} columns={3} className="mt-16" />
      </Chapter>

      {/* 23:48 · closing: fiscal receipts, the drawer and payroll */}
      <Chapter
        id={close.id}
        km={close.km}
        eyebrow={close.eyebrow}
        title={close.title}
        accent={close.accent}
        lead={close.lead}
        className="fd-ch"
      >
        <div className="mt-14 lg:mt-20">
          <ShiftClose t={t} locale={locale} label={mock.close} />
        </div>
        <FeatureGrid items={close.features} columns={3} className="mt-16" />
      </Chapter>

      {/* 09:00 · the owner's morning: every branch on one screen */}
      <Chapter
        id={owner.id}
        tone="navy"
        km={owner.km}
        eyebrow={owner.eyebrow}
        title={owner.title}
        accent={owner.accent}
        lead={owner.lead}
        className="fd-ch"
      >
        <div className="mt-14 lg:mt-20">
          <BranchBoard t={t} locale={locale} label={mock.chain} />
        </div>
        <FeatureGrid items={owner.features} columns={3} className="mt-16" />
      </Chapter>

      {/* Engineering: five apps on one API */}
      <Chapter
        id={platform.id}
        eyebrow={platform.eyebrow}
        title={platform.title}
        accent={platform.accent}
        lead={platform.lead}
        className="fd-ch"
      >
        <AppsDiagram platform={platform} className="mt-14 lg:mt-20" />

        <h3 className="cine-eyebrow mt-20">{platform.principlesTitle}</h3>
        <FeatureGrid items={platform.principles} columns={4} headingLevel={4} className="mt-4" />

        <h3 className="cine-eyebrow mt-20">{platform.integrationsTitle}</h3>
        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <IntegrationOrbit center={{ brand: productName }} nodes={platform.integrations} />
          <ul className="fd-systems">
            {platform.integrations.map((system) => (
              <li key={system.name}>
                <b>{system.name}</b>
                <span>{system.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="cine-eyebrow mt-20">{platform.modulesTitle}</h3>
        <TagList tags={platform.modules} className="mt-6" />
      </Chapter>

      <FoodostEffects />
    </CaseLayout>
  );
}

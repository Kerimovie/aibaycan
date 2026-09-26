// "14:30 · AI invoice reading": Telegram chat, the invoice photo being scanned, the extraction panel with confidence
// and the review lane, played step by step by `scripts/sequence.ts`; then the five-step pipeline.
// Port of Atlas `src/components/cases/sahil-transport/InvoiceReader.astro`.
import { cx } from '../_shared/cx';
import type { SahilTransportCopy } from './i18n';
import './InvoiceReader.css';

// Steps: 0 photo sent · 1 scanning · 2 fields read · 3 unsure field to review · 4 confirmed and recorded.
const durations = [1300, 2600, 2400, 2600, 4200].join(',');

export function InvoiceReader({ invoices: v, className }: { invoices: SahilTransportCopy['invoices']; className?: string }) {
  const { scene } = v;
  const lowField = scene.fields.find((field) => field.confidence === 'low');

  return (
    <div className={cx('st-ocr', className)}>
      <div className="st-ocr__scene" role="img" aria-label={scene.label} data-st-seq="" data-durations={durations} data-step="4">
        {/* Chat */}
        <div className="st-chat">
          <div className="st-chat__head">
            <span className="st-chat__avatar">
              <svg viewBox="0 0 24 24">
                <path d="M3 11.5 20 4l-3 16-5.5-4.5L9 19v-5l8-7.5-10 6-4-1Z"></path>
              </svg>
            </span>
            <span className="min-w-0">
              <b>{scene.chat.group}</b>
              <small>{scene.chat.members}</small>
            </span>
          </div>
          <div className="st-chat__body">
            <div className="st-msg st-msg--driver" data-from="0">
              <small>{scene.chat.driver}</small>
              <span className="st-msg__photo">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </span>
              <span className="st-msg__file">{scene.chat.photo}</span>
            </div>
            <div className="st-msg st-msg--bot" data-from="1">
              {scene.chat.received}
            </div>
            <div className="st-msg st-msg--bot st-msg--warn" data-from="3">
              {scene.chat.review}
            </div>
            <div className="st-msg st-msg--bot st-msg--ok" data-from="4">
              {scene.chat.recorded}
            </div>
          </div>
        </div>

        {/* Invoice photo */}
        <div className="st-photo-wrap">
          <div className="st-photo">
            <span className="st-photo__scan"></span>
            <div className="st-photo__head">
              <b>{scene.document.title}</b>
              <span>{scene.document.sender}</span>
            </div>
            <span className="st-photo__stamp">{scene.document.stamp}</span>
            <ul className="st-photo__fields">
              {scene.fields.map((field) => (
                <li key={field.key} data-conf={field.confidence}>
                  <small>{field.label}</small>
                  <span>{field.value}</span>
                </li>
              ))}
            </ul>
            <span className="st-photo__sign"></span>
          </div>
        </div>

        {/* Extraction panel */}
        <div className="st-read">
          <p className="st-read__title">{scene.extractedTitle}</p>
          <ul className="st-read__fields">
            {scene.fields.map((field) => (
              <li key={field.key} data-conf={field.confidence}>
                <span className="st-read__label">{field.label}</span>
                <span className="st-read__value">{field.value}</span>
                <span className="st-read__conf">
                  <i />
                  {scene.confidence[field.confidence as keyof typeof scene.confidence]}
                </span>
              </li>
            ))}
          </ul>
          <div className="st-lane">
            <p className="st-lane__title">{scene.lane.title}</p>
            <div className="st-lane__card">
              <span className="st-lane__field">{lowField?.label ?? scene.lane.field}</span>
              <span className="st-lane__options">{scene.lane.options}</span>
              <span className="st-lane__action">
                <b>{scene.lane.decision}</b>
                <em>{scene.lane.approve}</em>
              </span>
              <span className="st-lane__done">✓ {scene.lane.done}</span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="cine-eyebrow mt-16">{v.pipelineTitle}</h3>
      <ol className="st-pipe">
        {v.pipeline.map((step, i) => (
          <li key={step.title}>
            <span className="st-pipe__no" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h4 className="st-pipe__title">{step.title}</h4>
            <p className="st-pipe__text">{step.text}</p>
          </li>
        ))}
      </ol>
      <p className="cine-note mt-8 max-w-3xl">{v.note}</p>
    </div>
  );
}

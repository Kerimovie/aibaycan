import { cx } from '../_shared/cx';
import { ChatMessage } from './ChatMessage';
import type { CavablyCopy } from './i18n';
import './AiStory.css';

// Port of Atlas `cases/cavably/AiStory.astro`. Driven by `scripts/ai-story.ts` (via CavablyEffects).

export function AiStory({ t, className }: { t: CavablyCopy; className?: string }) {
  const { chat, steps, slider } = t.ai;
  return (
    <div className={cx('cav cav-ai', className)} data-cav-ai="">
      <div className="cav-ai__stage" data-cav-ai-stage="">
        <div className="cav-ai__pips" aria-hidden="true">
          {steps.map((step, i) => (
            <span key={step.id} data-cav-ai-pip={i} data-active={i === 0 ? '' : undefined}>
              <b>{i + 1}</b>
              {step.label}
            </span>
          ))}
        </div>
      </div>

      <ol className="cav-ai__steps">
        {steps.map((step, i) => (
          <li key={step.id} className="cav-ai__step" data-cav-ai-step={i} data-active={i === 0 ? '' : undefined}>
            <div className="cav-ai__copy">
              <p className="cav-ai__kicker">
                <span className="cav-ai__no">{i + 1}</span>
                <span>{step.label}</span>
              </p>
              <h3 className="cav-ai__title">{step.title}</h3>
              <p className="cine-text mt-3">{step.text}</p>
              {step.sources.length > 0 && (
                <ul className="cav-ai__sources">
                  {step.sources.map((source, k) => (
                    <li key={k}>{source}</li>
                  ))}
                </ul>
              )}
              {step.id === 'handoff' && (
                <div className="cav-ai__slider" role="img" aria-label={`${slider.label}: ${slider.less} – ${slider.more}`}>
                  <span className="cav-label">{slider.label}</span>
                  <span className="cav-ai__track">
                    <i />
                  </span>
                  <span className="cav-ai__ends">
                    <span>{slider.less}</span>
                    <span>{slider.more}</span>
                  </span>
                </div>
              )}
            </div>

            <div className="cav-ai__scene" data-cav-ai-scene={i} data-active={i === 0 ? '' : undefined}>
              <div className="cav-ai__chat" role="img" aria-label={step.ariaLabel}>
                <div className="cav-ai__head">
                  <span className="cav-ai__avatar">D</span>
                  <span className="cav-ai__biz">
                    <b>{chat.business}</b>
                    <span>
                      <i /> {chat.status}
                    </span>
                  </span>
                  <span className="cav-ai__langs">{chat.langs}</span>
                </div>
                <div className="cav-msgs cav-ai__msgs">
                  {step.messages.map((message, k) => (
                    <ChatMessage key={k} message={message} aiLabel={chat.status} />
                  ))}
                </div>
                <div className="cav-ai__composer">
                  <span>{chat.composer}</span>
                  <i>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3zM6 11a6 6 0 0 0 12 0M12 17v3" />
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

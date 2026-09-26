import type { EtehsilCopy } from './i18n';
import './Challenge.css';

// Register marks per student, 8 lessons: 1 present, 0 absent, -1 blank. Row 3 is crossed out (moved group).
const marks = [
  [1, 1, 1, 0, 1, 1, -1, -1],
  [1, 0, 0, 0, 1, -1, -1, -1],
  [1, 1, 1, 1, 1, 1, -1, -1],
  [0, 1, 1, 1, 0, 1, -1, -1],
  [1, 1, -1, 1, 1, 1, -1, -1],
];

/** Port of Atlas `cases/etehsil/Challenge.astro`. */
export function Challenge({ c }: { c: EtehsilCopy['challenge'] }) {
  const d = c.desk;
  return (
    <div className="et-chaos mt-14 lg:mt-20" data-cine-inview="">
      <div className="et-desk" role="img" aria-label={d.label}>
        <div className="et-desk__register">
          <p className="et-desk__title">{d.register.title}</p>
          <ul>
            {d.register.rows.map((name, row) => (
              <li key={name} data-struck={row === 2 ? '' : undefined}>
                <span>{name}</span>
                {(marks[row] ?? []).map((mark, i) => (
                  <i key={i} data-mark={mark}>
                    {mark === 1 ? '✓' : mark === 0 ? '—' : ''}
                  </i>
                ))}
              </li>
            ))}
          </ul>
          <p className="et-desk__scribble">{d.register.note}</p>
        </div>

        <div className="et-desk__sheet">
          <p className="et-desk__file">
            <b>X</b>
            {d.sheet.file}
          </p>
          <table>
            <thead>
              <tr>
                <td />
                {d.sheet.columns.map((col) => (
                  <th key={col}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {d.sheet.rows.map((row, r) => (
                <tr key={r}>
                  <th>{r + 2}</th>
                  {row.map((cell, i) => (
                    <td key={i} data-bad={(r === 1 && i === 2) || cell.startsWith('#') ? '' : undefined}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th>5</th>
                <td />
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </div>

        <div className="et-desk__chat">
          <p className="et-desk__chat-head">
            <i />
            {d.chat.title}
          </p>
          {d.chat.messages.map((message) => (
            <p key={message} className="et-desk__bubble">
              {message}
            </p>
          ))}
        </div>
      </div>

      <ol className="et-pains mt-16 lg:mt-20">
        {c.pains.map((pain, index) => (
          <li key={pain.title} className="cine-rise">
            <span className="et-pains__no" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="et-pains__title">{pain.title}</h3>
            <p className="cine-text mt-2">{pain.text}</p>
          </li>
        ))}
      </ol>

      <div className="et-flow mt-16 lg:mt-20">
        <h3 className="cine-eyebrow">{c.flowTitle}</h3>
        <ol>
          {c.flow.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

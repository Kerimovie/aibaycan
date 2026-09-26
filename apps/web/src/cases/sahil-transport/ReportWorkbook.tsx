// "08:00 · reports": the ten-tab Excel workbook mockup, cycling stop analysis → GPS analysis → summary
// (`scripts/sequence.ts`); the summary is the final step and the frame without JS.
// Port of Atlas `src/components/cases/sahil-transport/ReportWorkbook.astro`.
import { Fragment } from 'react';
import { cx } from '../_shared/cx';
import type { SahilTransportCopy } from './i18n';
import './ReportWorkbook.css';

// Panes cycle stop analysis → GPS analysis → summary; the summary is the last step, so it is the frame without JS.
const TAB_STOPS = 8;
const TAB_GPS = 3;
const TAB_SUMMARY = 0;
const paneOfTab: Record<number, number> = { [TAB_STOPS]: 0, [TAB_GPS]: 1, [TAB_SUMMARY]: 2 };
const durations = [3200, 3200, 3600].join(',');

// Sample chart data.
const waitingHours = [9, 12, 8, 11, 13, 8];
const operationalHours = [6, 5, 7, 6, 4, 5];
const maxH = 14;
const barW = 16;
const groupW = 300 / waitingHours.length;
const barY = (h: number) => 150 - (h / maxH) * 128;

const trucks: [number, number][] = [
  [180, 62], [240, 80], [260, 84], [300, 101], [330, 108], [350, 113], [380, 128], [410, 131],
  [430, 142], [460, 150], [480, 152], [520, 170], [540, 176], [590, 190],
];
const px = (km: number) => 30 + ((km - 150) / 470) * 280;
const py = (l: number) => 150 - ((l - 50) / 150) * 128;
// Axis ticks, so both charts can be read off the screen instead of being decorative.
const hourTicks = [0, 5, 10];
const kmTicks = [200, 350, 500];
const litreTicks = [80, 130, 180];
const col = ['A', 'B', 'C', 'D'];
// Sample rows of the open sheet (fictional plates). Numbers are small enough to need no thousands separator,
// so the same values read correctly in every locale.
const rows: [string, string, string, string][] = [
  ['10-XX-014', '412', '1:20', '180'],
  ['10-XX-027', '386', '0:45', '0'],
  ['10-XX-031', '508', '2:10', '320'],
  ['10-XX-042', '274', '0:20', '0'],
  ['10-XX-055', '611', '1:05', '140'],
  ['10-XX-063', '339', '3:30', '480'],
  ['10-XX-078', '452', '0:00', '0'],
  ['10-XX-091', '528', '1:45', '260'],
];

export function ReportWorkbook({ workbook: w, className }: { workbook: SahilTransportCopy['reports']['workbook']; className?: string }) {
  return (
    <div className={cx('st-wb', className)} role="img" aria-label={w.label} data-st-seq="" data-durations={durations} data-step="2">
      <div className="st-wb__bar">
        <span className="st-wb__icon">X</span>
        <span className="st-wb__file">{w.file}</span>
        <span className="st-wb__dots">
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
      <div className="st-wb__formula">
        <span>fx</span>
        <span className="st-wb__formula-text">=SUM(D2:D9)</span>
      </div>
      <div className="st-wb__sheet">
        <div className="st-wb__cols">
          <span></span>
          {col.map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </div>
        <div className="st-wb__body">
          <div className="st-wb__rows">
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>
          <div className="st-wb__panes">
            <div className="st-wb__cells">
              {w.sheet.head.map((head, c) => (
                <span key={head} data-head="" data-num={c > 0 ? '' : undefined}>
                  {head}
                </span>
              ))}
              {rows.map((row) =>
                row.map((cell, c) => (
                  <span key={`${row[0]}-${c}`} data-num={c > 0 ? '' : undefined}>
                    {cell}
                  </span>
                )),
              )}
            </div>
            {/* Pane 0: stop analysis */}
            <div className="st-wb__pane" data-pane="0">
              <p className="st-wb__chart-title">{w.stops.title}</p>
              <svg viewBox="0 0 320 176">
                {hourTicks.map((h) => (
                  <Fragment key={h}>
                    <line x1="26" x2="310" y1={barY(h)} y2={barY(h)} className="st-wb__gridline" />
                    <text x="22" y={barY(h) + 3.5} textAnchor="end" className="st-wb__axis">
                      {h}
                    </text>
                  </Fragment>
                ))}
                {waitingHours.map((h, i) => {
                  const op = operationalHours[i] ?? 0;
                  return (
                    <g key={i}>
                      <rect
                        x={10 + i * groupW + groupW / 2 - barW - 1}
                        y={barY(h)}
                        width={barW}
                        height={150 - barY(h)}
                        rx="2"
                        className="st-wb__bar-a"
                      />
                      <rect x={10 + i * groupW + groupW / 2 + 1} y={barY(op)} width={barW} height={150 - barY(op)} rx="2" className="st-wb__bar-b" />
                      <text x={10 + i * groupW + groupW / 2} y="168" textAnchor="middle" className="st-wb__axis">
                        {w.stops.days[i]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            {/* Pane 1: fuel against distance */}
            <div className="st-wb__pane" data-pane="1">
              <p className="st-wb__chart-title">{w.fuel.title}</p>
              <svg viewBox="0 0 320 176">
                <line x1="34" x2="300" y1="150" y2="150" className="st-wb__gridline"></line>
                <line x1="34" x2="34" y1="18" y2="150" className="st-wb__gridline"></line>
                {litreTicks.map((l) => (
                  <Fragment key={l}>
                    <line x1="34" x2="300" y1={py(l)} y2={py(l)} className="st-wb__gridline" />
                    <text x="30" y={py(l) + 3.5} textAnchor="end" className="st-wb__axis">
                      {l}
                    </text>
                  </Fragment>
                ))}
                {kmTicks.map((km) => (
                  <text key={km} x={px(km)} y="164" textAnchor="middle" className="st-wb__axis">
                    {km}
                  </text>
                ))}
                <line x1={px(170)} y1={py(58)} x2={px(590)} y2={py(193)} className="st-wb__trend"></line>
                {trucks.map(([km, l]) => (
                  <circle key={km} cx={px(km)} cy={py(l)} r="4.5" className="st-wb__dot" />
                ))}
                <text x="300" y="176" textAnchor="end" className="st-wb__axis">
                  {w.fuel.x}
                </text>
                <text x="34" y="14" textAnchor="start" className="st-wb__axis">
                  {w.fuel.y}
                </text>
              </svg>
            </div>
            {/* Pane 2: summary */}
            <div className="st-wb__pane" data-pane="2">
              <div className="st-wb__table">
                <span className="st-wb__th">{w.summary.head[0]}</span>
                <span className="st-wb__th st-wb__num">{w.summary.head[1]}</span>
                {w.summary.rows.map((row) => (
                  <Fragment key={row.label}>
                    <span>{row.label}</span>
                    <span className="st-wb__num">{row.value}</span>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="st-wb__tabs">
        {w.tabs.map((tab, i) => (
          <li key={tab} data-tab-pane={paneOfTab[i] ?? undefined}>
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}

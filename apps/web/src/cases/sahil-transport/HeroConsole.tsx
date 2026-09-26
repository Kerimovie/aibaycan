// Hero visual of the Sahil Transport case: fleet map of the Absheron peninsula (SVG, complete without JS; the canvas
// in `scripts/fleet-map.ts` animates the trucks on top) and the sensor traces of one truck.
// Port of Atlas `src/components/cases/sahil-transport/HeroConsole.astro`.
import type { SahilTransportCopy } from './i18n';
import { MAP_H, MAP_W, cities, parked, pathOf, pointAt, project, roads, sea, trackOf, truckDistance, zones } from './scripts/geo';
import './HeroConsole.css';

const seaPath = pathOf(sea, true);
const roadPaths = roads.map((road) => pathOf(road.points));
const r1 = (n: number) => Math.round(n * 10) / 10;

// Moving trucks at t = 0: drawn in SVG so the map is complete without JavaScript (the canvas takes over when it runs).
const movingTrucks = roads.flatMap((road, ri) => {
  const track = trackOf(road);
  return Array.from({ length: road.trucks }, (_, i) => pointAt(track, truckDistance(track, ri, i, 0)));
});

const labelOffset = {
  e: [9, 5, 'start'],
  w: [-9, 5, 'end'],
  n: [0, -10, 'middle'],
  s: [0, 20, 'middle'],
} as const;
const [seaX, seaY] = project([40.02, 50.3]);

// Sensor traces: one synthetic trip period (drive · load · drive · unload · drive · refuel) repeated twice for a seamless scroll.
const N = 100;
const phase = (i: number) => (i < 30 ? 'drive' : i < 42 ? 'stop' : i < 72 ? 'drive' : i < 80 ? 'stop' : i < 92 ? 'drive' : 'stop');
const speed: number[] = [];
const fuel: number[] = [];
const weight: number[] = [];
let tank = 232;
for (let i = 0; i <= N; i++) {
  const k = i % N;
  const moving = phase(k) === 'drive';
  const edge = moving && (phase((k + N - 1) % N) === 'stop' || phase((k + 1) % N) === 'stop') ? 0.45 : 1;
  speed.push(moving ? (56 + 9 * Math.sin(k * 0.7) + 5 * Math.sin(k * 1.9)) * edge : 0);
  if (moving) tank -= 0.9;
  if (k >= 92) tank = 167 + ((k - 91) / 8) * 65;
  if (k === 0) tank = 232;
  fuel.push(tank);
  weight.push(k < 33 ? 0 : k < 40 ? ((k - 33) / 7) * 21.4 : k < 74 ? 21.4 : k < 79 ? 21.4 - ((k - 74) / 5) * 21.4 : 0);
}
const tracePath = (values: number[], min: number, max: number) => {
  const pts = values.map((v, i) => [i * 2, 36 - ((v - min) / (max - min)) * 32] as const);
  const one = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${r1(y)}`).join('');
  const two = pts.map(([x, y]) => `L${x + 200} ${r1(y)}`).join('');
  return one + two;
};
const traces: Record<string, string> = {
  speed: tracePath(speed, 0, 80),
  fuel: tracePath(fuel, 140, 240),
  weight: tracePath(weight, 0, 24),
};

export function HeroConsole({ t }: { t: SahilTransportCopy }) {
  const c = t.console;
  return (
    <div className="st-console" role="img" aria-label={c.label} data-st-console="">
      <div className="st-console__bar">
        <span className="st-console__title">{c.title}</span>
        <span className="st-console__rt">
          <i></i>
          {c.realtime}
        </span>
        <span className="st-console__clock cine-num">{c.clock}</span>
      </div>

      <div className="st-console__map">
        <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} preserveAspectRatio="xMidYMid meet">
          <defs>
            <pattern id="st-land-dots" width="9" height="9" patternUnits="userSpaceOnUse">
              <rect width="1.7" height="1.7" className="st-map__dot"></rect>
            </pattern>
            <radialGradient id="st-map-glow" cx="0.58" cy="0.5" r="0.7">
              <stop offset="0" className="st-map__glow-in"></stop>
              <stop offset="1" className="st-map__glow-out"></stop>
            </radialGradient>
          </defs>
          <rect width={MAP_W} height={MAP_H} fill="url(#st-map-glow)"></rect>
          <rect width={MAP_W} height={MAP_H} fill="url(#st-land-dots)"></rect>
          <path d={seaPath} className="st-map__sea"></path>
          <path d={seaPath} className="st-map__coast"></path>
          <text x={seaX} y={seaY} className="st-map__sea-label">
            {c.sea}
          </text>
          {roadPaths.map((d, i) => (
            <path key={`bed-${i}`} d={d} className="st-map__road-bed" />
          ))}
          {roadPaths.map((d, i) => (
            <path key={`road-${i}`} d={d} className="st-map__road" />
          ))}
          {zones.map((zone, i) => {
            const [x, y] = project(zone.at);
            return <circle key={i} cx={x} cy={y} r={zone.r} className="st-map__zone" data-waiting={zone.waiting ? '' : undefined} />;
          })}
          {cities.map((city) => {
            const [x, y] = project(city.at);
            const [dx, dy, anchor] = labelOffset[city.side];
            return (
              <g key={city.key} className="st-map__city" data-major={city.major ? '' : undefined} data-key={city.key}>
                <circle cx={x} cy={y} r={city.major ? 4.5 : 3} />
                <text x={x + dx} y={y + dy} textAnchor={anchor}>
                  {c.cities[city.key]}
                </text>
              </g>
            );
          })}
          {parked.map((truck, i) => {
            const [x, y] = project(truck.at);
            return <circle key={i} cx={x} cy={y} r="4.2" className="st-map__truck" data-tone={truck.tone} />;
          })}
          <g className="st-map__moving">
            {movingTrucks.map(([x, y], i) => (
              <circle key={i} cx={r1(x)} cy={r1(y)} r="4" className="st-map__truck" data-tone="moving" />
            ))}
          </g>
        </svg>
        <canvas className="st-console__canvas" data-st-fleet=""></canvas>
      </div>

      <ul className="st-console__legend">
        {c.legend.map((item) => (
          <li key={item.tone} data-tone={item.tone}>
            <i />
            <span>{item.label}</span>
            <b className="cine-num">{item.value}</b>
          </li>
        ))}
      </ul>

      <div className="st-console__truck">
        <p className="st-console__truck-head">
          <b>{c.truck.plate}</b>
          <span>{c.truck.route}</span>
          <em>{c.truck.status}</em>
        </p>
        <div className="st-traces">
          {c.truck.traces.map((trace) => (
            <div key={trace.tone} className="st-trace" data-tone={trace.tone}>
              <p className="st-trace__label">
                <span>{trace.label}</span>
                <b className="cine-num">
                  {trace.value} <small>{trace.unit}</small>
                </b>
              </p>
              <svg viewBox="0 0 200 40" preserveAspectRatio="none">
                <g className="st-trace__run">
                  <path d={traces[trace.tone] ?? ''} />
                </g>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

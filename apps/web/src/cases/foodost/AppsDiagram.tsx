import { cx } from '../_shared/cx';
import type { Foodost } from './data';
import './AppsDiagram.css';

// Five apps around one API: three above the bus, two below, each wired in with a live connector.
// Real list markup (apps as h3 + text); icons, connectors and the moving pulse are decoration.
// Port of Atlas `AppsDiagram.astro`.
const icons: Record<string, string> = {
  pos: 'M3 5h18v11H3zM8 20h8M12 16v4M7 9h5M7 12h3',
  kds: 'M2 4h20v12H2zM6 20h12M6 8h3v4H6zM11 8h3v4h-3zM16 8h2v4h-2z',
  qr: 'M7 2h10v20H7zM10 6h4v4h-4zM11 18h2',
  admin: 'M3 4h18v12H3zM1 20h22M6 12l3-3 3 2 5-5',
  console: 'M3 4h18v16H3zM7 9l3 3-3 3M12 15h5',
};

type App = Foodost['platform']['apps'][number];

function AppItem({ app }: { app: App }) {
  return (
    <li className="fd-app">
      <svg className="fd-app__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d={icons[app.icon] ?? icons.admin} />
      </svg>
      <p className="fd-app__who">{app.who}</p>
      <h3 className="fd-app__name">{app.name}</h3>
      <p className="fd-app__text">{app.text}</p>
    </li>
  );
}

export function AppsDiagram({ platform, className }: { platform: Foodost['platform']; className?: string }) {
  const top = platform.apps.slice(0, 3);
  const bottom = platform.apps.slice(3);
  return (
    <div className={cx('fd-apps', className)} data-cine-inview="">
      <ul className="fd-apps__row" data-row="top">
        {top.map((app) => (
          <AppItem key={app.icon} app={app} />
        ))}
      </ul>
      <p className="fd-apps__bus">
        <b>{platform.api.name}</b>
        <span>{platform.api.note}</span>
      </p>
      <ul className="fd-apps__row" data-row="bottom">
        {bottom.map((app) => (
          <AppItem key={app.icon} app={app} />
        ))}
      </ul>
    </div>
  );
}

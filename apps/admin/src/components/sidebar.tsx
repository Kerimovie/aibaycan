import { NavLink } from 'react-router-dom';
import { NAV_SECTIONS } from './sidebar-nav';

/**
 * Ynex-stili dark navy sidebar (bax docs/29).
 * Qruplaşmış menu, bölmə başlıqları, aktiv item violet marker + yumşaq fon.
 */
export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-60 flex-col bg-sidebar-bg text-sidebar-text">
      {/* Loqo */}
      <div className="flex h-[60px] items-center gap-2 px-6">
        <span className="text-lg font-bold text-white">
          aibaycan<span className="text-primary">.az</span>
        </span>
      </div>

      {/* Naviqasiya */}
      <nav className="flex-1 space-y-6 overflow-y-auto px-4 py-4">
        {NAV_SECTIONS.map((section) => (
          <div key={section.heading}>
            <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-sidebar-text-muted">
              {section.heading}
            </p>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.end}
                      className={({ isActive }) =>
                        [
                          'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                          isActive
                            ? 'bg-sidebar-bg-active font-medium text-white'
                            : 'text-sidebar-text hover:bg-sidebar-bg-hover hover:text-white',
                        ].join(' ')
                      }
                    >
                      <Icon size={18} strokeWidth={1.75} />
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

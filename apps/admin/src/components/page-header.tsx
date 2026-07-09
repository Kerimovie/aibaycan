import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  breadcrumb?: string[];
  action?: ReactNode;
}

/**
 * Ynex səhifə başlığı zolağı (bax docs/29):
 * sol başlıq + sağ breadcrumb/action.
 */
export function PageHeader({ title, breadcrumb, action }: PageHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-admin-text">{title}</h1>
      <div className="flex items-center gap-4">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="flex items-center gap-1.5 text-sm text-admin-muted">
            {breadcrumb.map((crumb, i) => (
              <span key={crumb} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-admin-muted/50">»</span>}
                <span className={i === breadcrumb.length - 1 ? 'text-admin-text' : ''}>{crumb}</span>
              </span>
            ))}
          </nav>
        )}
        {action}
      </div>
    </div>
  );
}

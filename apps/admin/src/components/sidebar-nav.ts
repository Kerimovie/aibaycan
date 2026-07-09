import {
  LayoutDashboard,
  Briefcase,
  Wrench,
  Inbox,
  Image,
  Tags,
  Users,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
  end?: boolean;
}

export interface NavSection {
  heading: string;
  items: NavItem[];
}

/**
 * Admin sidebar naviqasiyası — modul xəritəsinə uyğun (docs/28).
 * Faza 1 modulları aktiv; sonrakı fazalar əlavə olunacaq.
 */
export const NAV_SECTIONS: NavSection[] = [
  {
    heading: 'Əsas',
    items: [{ to: '/', label: 'İcmal', icon: LayoutDashboard, end: true }],
  },
  {
    heading: 'Kontent',
    items: [
      { to: '/case-studies', label: 'İşlər', icon: Briefcase },
      { to: '/services', label: 'Xidmətlər', icon: Wrench },
      { to: '/categories', label: 'Kateqoriyalar', icon: Tags },
      { to: '/media', label: 'Media', icon: Image },
    ],
  },
  {
    heading: 'Müştəri',
    items: [{ to: '/leads', label: 'Sorğular', icon: Inbox }],
  },
  {
    heading: 'Sistem',
    items: [{ to: '/admins', label: 'Adminlər', icon: Users }],
  },
];

'use client';

// libraries
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// config
import { SECONDARY_SIDEBAR_CONFIG } from '@/components/layout/Sidebar/Sidebar.config';
// helpers
import { classNames } from '@/shared/utils/classNames';
// styles
import './SidebarNav.styles.scss';

export const SidebarNav = () => {
  const { promo } = SECONDARY_SIDEBAR_CONFIG;
  const pathname = usePathname();

  return (
    <nav className="nav">
      <h2 className="nav__title">{promo.title}</h2>
      <div className="nav__menu">
        {promo.items.map((item) => (
          <Link
            href={item.path || '#'}
            key={item.id}
            className={classNames('nav__menu-item', {
              'nav__menu-item--active':
                item.path && pathname.includes(item.path),
            })}
          >
            <span className="nav__menu-text">{item.label}</span>
            <div className="nav__menu-underline" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

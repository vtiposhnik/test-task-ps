import { Routes } from '@/shared/types/types';
import { SidebarNavConfig } from '@/components/layout/Sidebar/Sidebar.types';

export const SECONDARY_SIDEBAR_CONFIG: SidebarNavConfig = {
  promo: {
    title: 'Virtuozzo Application Platform',
    items: [
      {
        id: 'review',
        label: 'Обзор',
        hasChildren: false,
        path: Routes.Browse,
      },
      {
        id: 'envs',
        label: 'Окружения',
        hasChildren: true,
      },
    ],
  },
};

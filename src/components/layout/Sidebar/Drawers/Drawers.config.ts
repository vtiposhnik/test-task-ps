import { DrawerTypes } from '@/components/layout/Sidebar/Sidebar.types';
import { CSSProperties, ReactNode } from 'react';
import { DrawerBaseProps } from '@/components/layout/Sidebar/Drawers/Drawers.types';
import { MenuDrawer } from '@/components/layout/Sidebar/Drawers/Menu.drawers';
import { HelpDrawer } from '@/components/layout/Sidebar/Drawers/Help.drawer';
import { LanguageDrawer } from '@/components/layout/Sidebar/Drawers/Language.drawer';

// TODO if heavy, lazy imporst
export const DRAWER_CONFIG: Record<
  DrawerTypes,
  (props: DrawerBaseProps) => ReactNode
> = {
  [DrawerTypes.Menu]: MenuDrawer,
  [DrawerTypes.Help]: HelpDrawer,
  [DrawerTypes.Language]: LanguageDrawer,
};

export const SHARED_DRAWER_ROOT_STYLES: CSSProperties = {
  position: 'absolute',
  top: '60px',
  left: '60px',
  zIndex: 14,
};

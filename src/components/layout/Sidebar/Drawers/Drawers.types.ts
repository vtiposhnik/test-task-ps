import { DrawerTypes } from '@/components/layout/Sidebar/Sidebar.types';

export interface DrawerBaseProps {
  activeDrawerId: DrawerTypes;
  close: () => void;
}

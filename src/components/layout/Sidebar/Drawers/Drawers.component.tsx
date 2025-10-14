// config
import { DRAWER_CONFIG } from '@/components/layout/Sidebar/Drawers/Drawers.config';
// types
import { DrawerTypes } from '@/components/layout/Sidebar/Sidebar.types';

interface DrawersProps {
  closeDrawer: () => void;
  activeDrawer: DrawerTypes | null;
}

export const DrawersComponent = ({
  activeDrawer,
  closeDrawer,
}: DrawersProps) => {
  if (!activeDrawer) {
    return null;
  }

  const ActiveDrawer = DRAWER_CONFIG[activeDrawer];

  return <ActiveDrawer activeDrawerId={activeDrawer} close={closeDrawer} />;
};

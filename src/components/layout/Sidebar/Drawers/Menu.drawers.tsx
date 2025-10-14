import { Drawer } from 'antd';
import { DrawerBaseProps } from '@/components/layout/Sidebar/Drawers/Drawers.types';
import { DrawerTypes } from '@/components/layout/Sidebar/Sidebar.types';
import { SHARED_DRAWER_ROOT_STYLES } from '@/components/layout/Sidebar/Drawers/Drawers.config';

export const MenuDrawer = ({ close, activeDrawerId }: DrawerBaseProps) => (
  <Drawer
    title="Меню"
    onClose={close}
    open={activeDrawerId === DrawerTypes.Menu}
    placement="left"
    rootStyle={SHARED_DRAWER_ROOT_STYLES}
  >
    Menu
  </Drawer>
);

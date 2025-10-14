import { Drawer } from 'antd';
import { DrawerBaseProps } from '@/components/layout/Sidebar/Drawers/Drawers.types';
import { DrawerTypes } from '@/components/layout/Sidebar/Sidebar.types';
import { SHARED_DRAWER_ROOT_STYLES } from '@/components/layout/Sidebar/Drawers/Drawers.config';

export const HelpDrawer = ({ close, activeDrawerId }: DrawerBaseProps) => (
  <Drawer
    title="Помощь"
    onClose={close}
    placement="left"
    open={activeDrawerId === DrawerTypes.Help}
    width={360}
    rootStyle={SHARED_DRAWER_ROOT_STYLES}
  >
    Помощь
  </Drawer>
);

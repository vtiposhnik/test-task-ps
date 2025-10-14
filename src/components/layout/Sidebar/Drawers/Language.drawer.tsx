import { Drawer } from 'antd';
import { DrawerBaseProps } from '@/components/layout/Sidebar/Drawers/Drawers.types';
import { DrawerTypes } from '@/components/layout/Sidebar/Sidebar.types';
import { SHARED_DRAWER_ROOT_STYLES } from '@/components/layout/Sidebar/Drawers/Drawers.config';

export const LanguageDrawer = ({ close, activeDrawerId }: DrawerBaseProps) => (
  <Drawer
    title="Сменить язык"
    onClose={close}
    width={360}
    open={activeDrawerId === DrawerTypes.Language}
    placement="left"
    rootStyle={SHARED_DRAWER_ROOT_STYLES}
  >
    Language
  </Drawer>
);

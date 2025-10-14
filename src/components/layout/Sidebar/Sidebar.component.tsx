'use client';

// components
import { SidebarNav } from '@/components/layout/Sidebar/SidebarNav/SidebarNav.component';
import { SidebarItemComponent } from '@/components/layout/Sidebar/SidebarItem/SidebarItem.component';
import { DrawersComponent } from '@/components/layout/Sidebar/Drawers/Drawers.component';
import {
  askIcon,
  langIcon,
  menuIcon,
  moonIcon,
  pinIcon,
  toggledPinIcon,
} from '@/components/icons/common';
// hooks
import { useSidebarController } from '@/components/layout/Sidebar/hooks/useSidebarController.hook';
// types
import { DrawerTypes } from '@/components/layout/Sidebar/Sidebar.types';
// helpers
import { classNames } from '@/shared/utils/classNames';
// styles
import './Sidebar.styles.scss';

export const Sidebar = () => {
  const {
    isSidebarPinned,
    toggleSidebarPin,
    activeDrawer,
    closeDrawer,
    toggleDrawer,
  } = useSidebarController();

  const sidebarMods = { 'sidebar--pinned': isSidebarPinned };

  return (
    <>
      <aside className={classNames('sidebar', sidebarMods)}>
        <div className="sidebar__main">
          <div className="sidebar__menu">
            <SidebarItemComponent
              className="sidebar__menu__icon"
              src={menuIcon}
              tooltipText="Меню"
              onClick={() => toggleDrawer(DrawerTypes.Menu)}
              isActive={activeDrawer === DrawerTypes.Menu}
            />
          </div>

          <SidebarItemComponent
            src={askIcon}
            tooltipText="Помощь"
            onClick={() => toggleDrawer(DrawerTypes.Help)}
            isActive={activeDrawer === DrawerTypes.Help}
          />

          <div className="sidebar__main__bottom">
            <SidebarItemComponent src={moonIcon} tooltipText="Сменить тему" />

            <SidebarItemComponent
              src={langIcon}
              tooltipText="Сменить язык"
              onClick={() => toggleDrawer(DrawerTypes.Language)}
              isActive={activeDrawer === DrawerTypes.Language}
            />

            <SidebarItemComponent
              src={isSidebarPinned ? toggledPinIcon : pinIcon}
              tooltipText={
                isSidebarPinned
                  ? 'Открепить боковую панель'
                  : 'Закрепить боковую панель'
              }
              onClick={toggleSidebarPin}
            />
          </div>
        </div>

        {isSidebarPinned && <SidebarNav />}
      </aside>

      <DrawersComponent activeDrawer={activeDrawer} closeDrawer={closeDrawer} />
    </>
  );
};

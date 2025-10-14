// libraries
import { useState } from 'react';
// hooks
import { useToggleHook } from '@/shared/hooks/useToggle.hook';
// types
import { DrawerTypes } from '@/components/layout/Sidebar/Sidebar.types';

export const useSidebarController = () => {
  const [isSidebarPinned, toggleSidebarPin] = useToggleHook(true);

  const [activeDrawer, setActiveDrawer] = useState<DrawerTypes | null>(null);

  const toggleDrawer = (drawerId: DrawerTypes) => {
    setActiveDrawer((prev) => (prev === drawerId ? null : drawerId));
  };

  const closeDrawer = () => {
    setActiveDrawer(null);
  };

  return {
    isSidebarPinned,
    toggleSidebarPin,
    activeDrawer,
    closeDrawer,
    toggleDrawer,
  };
};

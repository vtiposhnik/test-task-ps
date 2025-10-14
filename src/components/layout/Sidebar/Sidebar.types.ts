export enum DrawerTypes {
  Menu = 'menu',
  Help = 'help',
  Language = 'language',
}

export interface SidebarNavConfig {
  promo: {
    title: string;
    items: {
      id: string;
      label: string;
      hasChildren: boolean;
      path?: string;
    }[];
  };
}

export type Period = 'hour' | 'month';
export type PublicNetwork = 'order' | 'no_order';
export type RouterType = 'compact' | 'large';

export interface BrowseResourcesState {
  cpuCores: number;
  ram: number;
  nvmeDisk: number;
  archiveDisk: number;
  routedIp: number;
  publicNetwork: PublicNetwork;
  router: RouterType;
  period: Period;
}

export interface BrowseResourceInputOption {
  label: string;
  value: string;
  price: number;
}

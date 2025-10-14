import { BrowseResourcesState } from '@/app/platform/browse/page.types';

export const PUBLIC_NETWORK_OPTIONS = [
  { label: 'Заказывать', value: 'order', price: 2000 },
  { label: 'Не заказывать', value: 'no_order', price: 0 },
];

export const ROUTER_OPTIONS = [
  { label: 'Compact — 1 vCPU, 512 MB RAM', value: 'compact', price: 3000 },
  { label: 'Large — 2 vCPU, 1 GB RAM', value: 'large', price: 6000 },
];

export const BROWSE_RESOURCES_INITIAL_STATE: BrowseResourcesState = {
  cpuCores: 4,
  ram: 4,
  nvmeDisk: 80,
  archiveDisk: 0,
  routedIp: 1,
  publicNetwork: 'no_order',
  router: 'compact',
  period: 'month',
};

export const calcluateBrowseTotal = ({
  cpuCores,
  ram,
  nvmeDisk,
  archiveDisk,
  routedIp,
  publicNetwork,
  router,
  period,
}: BrowseResourcesState) => {
  const PRICE = {
    cpuCore: 1900,
    ram: 5200,
    nvme: 160,
    archive: 10,
    routedIp: 1000,
    public: { order: 2000, no_order: 0 },
    router: { compact: 3000, large: 6000 },
  };

  const multiplier = period === 'month' ? 1 : 1 / 30;

  const base =
    cpuCores * PRICE.cpuCore +
    ram * PRICE.ram +
    nvmeDisk * PRICE.nvme +
    archiveDisk * PRICE.archive +
    routedIp * PRICE.routedIp +
    PRICE.public[publicNetwork] +
    PRICE.router[router];

  return Math.round(base * multiplier).toLocaleString('ru-RU');
};

import { BrowseResourcesState } from '@/app/platform/browse/page.types';
import { Period } from '@/app/platform/page.types';
import {
  calculateResourceSum,
  SELECT_INPUT_RESOURCE_PRICES,
} from '@/app/platform/page.config';

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
  period: Period.Hour,
};

export const calcluateBrowseTotal = ({
  publicNetwork,
  router,
  period,
  ...rest
}: BrowseResourcesState) => {
  const multiplier = period === Period.Month ? 30 : 1;

  const base =
    calculateResourceSum({ ...rest }) +
    SELECT_INPUT_RESOURCE_PRICES.public[publicNetwork] +
    SELECT_INPUT_RESOURCE_PRICES.router[router];

  return Math.round(base * multiplier).toLocaleString('ru-RU');
};

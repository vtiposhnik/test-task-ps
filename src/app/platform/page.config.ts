import { BreadcrumbItemType } from 'antd/es/breadcrumb/Breadcrumb';
import { Period } from '@/app/platform/page.types';

export const PLATFORM_BREADCRUMB_ITEMS: BreadcrumbItemType[] = [
  {
    href: '#',
    title: 'Главная',
  },
];

export const PERIOD_OPTIONS = [
  { label: 'в час', value: Period.Hour },
  { label: 'в месяц', value: Period.Month },
];

export const COUNT_INPUT_RESOURCE_PRICES: Record<string, number> = {
  cpuCores: 63,
  ram: 173,
  nvmeDisk: 5,
  archiveDisk: 0.3,
  routedIp: 33.33,
  reservedCloudlets: 1.5,
  dynamicCloudlets: 1.75,
  diskSpace: 0.15,
  dedicatedIp: 2.75,
};

export const SELECT_INPUT_RESOURCE_PRICES = {
  public: { order: 2000, no_order: 0 },
  router: { compact: 3000, large: 6000 },
};

export const calculateResourceSum = (resources: Record<string, number>) => {
  return Object.entries(resources)?.reduce((sum, [key, value]) => {
    const price = COUNT_INPUT_RESOURCE_PRICES[key];

    console.log(key, price, value);

    sum += value * price;

    return sum;
  }, 0);
};

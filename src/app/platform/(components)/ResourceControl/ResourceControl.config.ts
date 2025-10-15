import { ResourcesState } from './ResourceControl.types';
import { Period } from '@/app/platform/page.types';
import { calculateResourceSum } from '@/app/platform/page.config';

export const RESOURCES_INITIAL_STATE: ResourcesState = {
  reservedCloudlets: 4,
  dynamicCloudlets: 8,
  diskSpace: 10,
  dedicatedIp: 1,
  period: Period.Hour,
};

export const calculateTotal = ({ period, ...rest }: ResourcesState) => {
  const multiplier = period === Period.Month ? 30 : 1;

  const base = calculateResourceSum({ ...rest });

  return base * multiplier;
};

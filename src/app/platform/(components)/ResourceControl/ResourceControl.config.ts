import { ResourcesState } from './ResourceControl.types';

export const RESOURCES_INITIAL_STATE: ResourcesState = {
  reservedCloudlets: 4,
  dynamicCloudlets: 8,
  diskSpace: 10,
  dedicatedIp: 1,
  period: 'hour',
};

export const calculateTotal = ({
  reservedCloudlets,
  dynamicCloudlets,
  diskSpace,
  dedicatedIp,
  period,
}: ResourcesState) => {
  const PRICE = {
    reserved: 1.5,
    dynamic: 1.75,
    disk: 0.15,
    ip: 2.75,
    public: { order: 2000, no_order: 0 },
    router: { compact: 3000, large: 6000 },
  };

  const multiplier = period === 'month' ? 30 : 1;

  const base =
    reservedCloudlets * PRICE.reserved +
    dynamicCloudlets * PRICE.dynamic +
    diskSpace * PRICE.disk +
    dedicatedIp * PRICE.ip;

  return (base * multiplier).toFixed(2);
};

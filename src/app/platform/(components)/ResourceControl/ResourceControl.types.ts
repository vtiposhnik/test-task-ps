import { Period } from '@/app/platform/page.types';

export interface ResourcesState {
  reservedCloudlets: number;
  dynamicCloudlets: number;
  diskSpace: number;
  dedicatedIp: number;
  period: Period;
}

export type Period = 'hour' | 'month';

export interface ResourcesState {
  reservedCloudlets: number;
  dynamicCloudlets: number;
  diskSpace: number;
  dedicatedIp: number;
  period: Period;
}

export interface ResourceInputOption {
  label: string;
  value: string;
  price: number;
}

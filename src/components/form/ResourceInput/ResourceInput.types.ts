import { ResourceInputOption } from '@/app/platform/page.types';

export type BaseProps = {
  name: string;
  iconSrc: string;
  label: string;
  pricePerUnit?: number;
  unit?: string;
  hasTooltip?: boolean;
  tooltipText?: string;
};

export interface SelectInputModeProps extends BaseProps {
  value: string;
  onChange: (value: string) => void;
  options: ResourceInputOption[];
}

export interface CountInputModeProps extends BaseProps {
  value: number;
  onChange: (value: number) => void;
  options?: never;
}

// libraries
import { Select } from 'antd';
// components
import { arrowDownIcon } from '@/components/icons/formIcons';
// config
import { SELECT_INPUT_ROOT_STYLES } from '@/components/form/ResourceSelectInput/ResourceSelectInput.config';
// styles
import './ResourceSelectInput.styles.scss';
// types
import { SelectOption } from '@/shared/types/types';
import Image from 'next/image';

interface SelectInputProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
}

export const SelectInput = ({
  value,
  onChange,
  options,
  name,
}: SelectInputProps) => {
  return (
    <Select
      id={name}
      suffixIcon={<Image src={arrowDownIcon} alt="Toggle select" width={12} height={8} />}
      className="resource-select-input"
      value={value}
      onChange={onChange}
      styles={SELECT_INPUT_ROOT_STYLES}
      getPopupContainer={(triggerNode) =>
        triggerNode?.parentElement?.parentElement || document.body
      }
      variant="borderless"
      options={options}
    />
  );
};

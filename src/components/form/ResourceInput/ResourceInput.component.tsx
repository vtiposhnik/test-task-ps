// libraries
import Image from 'next/image';
import { Tooltip } from 'antd';
// components
import { CountInput } from '@/components/form/CountInput/CountInput.component';
import { SelectInput } from '@/components/form/ResourceSelectInput/ResourceSelectInput.component';
// static
import { tooltipIcon } from '@/components/icons/common';
// styles
import './ResourceInput.styles.scss';
// types
import {
  CountInputModeProps,
  SelectInputModeProps,
} from '@/components/form/ResourceInput/ResourceInput.types';

export type ResourceInputProps = SelectInputModeProps | CountInputModeProps;

export const ResourceInput = (props: ResourceInputProps) => {
  const {
    name,
    iconSrc,
    label,
    pricePerUnit,
    unit,
    hasTooltip,
    tooltipText = 'Доп информация',
    value,
    options,
    onChange,
  } = props;

  const renderInput = () => {
    if (options && options?.length) {
      const selectOptions = options.map((opt) => ({
        label: `${opt.label} — ${opt.price} тг`,
        value: opt.value,
      }));

      return (
        <SelectInput
          name={name}
          value={value}
          onChange={onChange}
          options={selectOptions}
        />
      );
    }

    return (
      <CountInput
        name={name}
        value={value as number}
        onChange={onChange as (value: number) => void}
      />
    );
  };

  return (
    <div className="resource-input-container">
      <div className="resource-input__icon">
        <Image src={iconSrc} alt={label} width={30} height={30} />
      </div>

      <div id={name} className="resource-input-wrapper">
        <div className="resource-input">
          <div className="resource-input__label">
            <label htmlFor={name}>{label}</label>

            {hasTooltip && (
              <Tooltip title={tooltipText}>
                <Image src={tooltipIcon} alt="tooltip" width={14} height={14} />
              </Tooltip>
            )}
          </div>

          {renderInput()}
        </div>

        {pricePerUnit && unit && (
          <div className="resource-input__price">
            <span className="resource-input__price-amount">
              {pricePerUnit.toFixed(2)}
            </span>{' '}
            тг за {unit}
          </div>
        )}
      </div>
    </div>
  );
};

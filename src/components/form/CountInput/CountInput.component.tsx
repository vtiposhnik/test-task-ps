// libraries
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
// styles
import './CountInput.styles.scss';
// types
import type { FC } from 'react';

export interface CountInputProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
}

export const CountInput: FC<CountInputProps> = ({
  name,
  value,
  onChange,
  min = 0,
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    onChange(value + 1);
  };

  return (
    <div id={name} className="count-input">
      <div className="count-input__left">
        <button
          type="button"
          onClick={handleDecrement}
          disabled={value <= min}
          aria-label="Decrease"
        >
          <MinusOutlined className="count-input__icon" />
        </button>
        <span
          className="count-input__value"
          aria-live="polite"
          aria-atomic="true"
        >
          {value}
        </span>
      </div>
      <button type="button" onClick={handleIncrement} aria-label="Increase">
        <PlusOutlined className="count-input__icon" />
      </button>
    </div>
  );
};

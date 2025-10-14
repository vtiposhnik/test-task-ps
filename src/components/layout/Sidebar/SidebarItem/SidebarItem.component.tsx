// libraries
import Image from 'next/image';
import { Tooltip } from 'antd';
// helpers
import { classNames } from '@/shared/utils/classNames';
// styles
import './SidebarItem.styles.scss';

interface TooltipIconComponentProps {
  src: string;
  className?: string;
  onClick?: () => void;
  tooltipText: string;
  width?: number;
  height?: number;
  isActive?: boolean;
}

export const SidebarItemComponent = ({
  className,
  tooltipText,
  src,
  width = 20,
  height = 20,
  onClick,
  isActive,
}: TooltipIconComponentProps) => {
  return (
    <Tooltip title={tooltipText} placement="right">
      <div
        className={classNames(
          'sidebar-item',
          { 'sidebar-item--active': isActive },
          [className]
        )}
        onClick={onClick}
        role="button"
      >
        <Image src={src} alt={tooltipText} width={width} height={height} />
      </div>
    </Tooltip>
  );
};

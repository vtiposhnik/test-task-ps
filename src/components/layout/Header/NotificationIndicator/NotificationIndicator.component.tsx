// components
import { bellIcon } from '@/components/icons/common';
// helpers
import { classNames } from '@/shared/utils/classNames';
// styles
import './NotificationIndicator.styles.scss';
interface NotificationIndicatorProps {
  hasNotification?: boolean;
}

export const NotificationIndicatorComponent = ({
  hasNotification = false,
}: NotificationIndicatorProps) => {
  const indicatorMods = {
    'notification-indicator--active': hasNotification,
  };

  return (
    <div className={classNames('notification-indicator', indicatorMods)}>
      <img src={bellIcon} alt="bell" width={16} height={16} />
      {hasNotification && <span className="notification-indicator__dot" />}
    </div>
  );
};

'use client';

// libraries
import Image from 'next/image';
import { Avatar, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
// components
import { NotificationIndicatorComponent } from './NotificationIndicator/NotificationIndicator.component';
import { logoIcon, tengeIcon } from '@/components/icons/common';
// hooks
import { useToggleHook } from '@/shared/hooks/useToggle.hook';
// styles
import './Header.styles.scss';
const mock = {
  userId: 'ID123456',
  balance: 0,
  firstName: 'Имя',
  lastName: 'Фамилия',
};

export const HeaderComponent = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useToggleHook();

  return (
    <>
      <header className="header">
        <div className="header__logo-wrapper">
          <MenuOutlined
            className="header__menu-icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          />
          <Image
            src={logoIcon}
            alt="Virtuozzo logo"
            width={34}
            height={34}
            priority
          />
          <span className="header__logo-title">Консоль управления</span>
        </div>

        <div className="header__right">
          <NotificationIndicatorComponent hasNotification={true} />

          <div className="header__balance">
            <Image src={tengeIcon} alt="Tenge" width={16} height={16} />
            <div className="header__strong">
              <div>{mock.userId}</div>
              <div>{mock.balance} тг</div>
            </div>
          </div>

          <div className="header__user">
            <Avatar alt="pfp" size={30}>
              {mock.firstName[0].toUpperCase()}
            </Avatar>
            <div className="header__strong">
              <div>{mock.firstName}</div>
              <div>{mock.lastName}</div>
            </div>
          </div>
        </div>
      </header>
      <Drawer
        open={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        placement="left"
      >
        <div>Mobile Menu</div>
      </Drawer>
    </>
  );
};

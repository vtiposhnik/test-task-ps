// libraries
import { Open_Sans } from 'next/font/google';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
// components
import { HeaderComponent } from '@/components/layout/Header/Header.component';
// config
import { THEME_CONFIG } from './theme';
// styles
import '@/styles/index.scss';
import './layout.scss';
// types
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-open-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Virtuozzo Console',
  description: 'Virtuozzo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${openSans.className} container`}>
        <AntdRegistry>
          <ConfigProvider theme={THEME_CONFIG}>
            <HeaderComponent />
            <main className="wrapper">{children}</main>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

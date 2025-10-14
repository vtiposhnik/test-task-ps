// components
import { Sidebar } from '@/components/layout/Sidebar/Sidebar.component';
// styles
import './layout.scss';
// types
import type { ReactNode } from 'react';

export default function PlatformLayout({ children }: { children: ReactNode }) {
  return (
    <div className="platform__container">
      <Sidebar />
      {children}
    </div>
  );
}

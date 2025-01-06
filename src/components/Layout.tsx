import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-transparent bg-opacity-20 backdrop:filter backdrop-blur-[1px] rounded-lg  p-6">
      <main>{children}</main>
    </div>
  );
};

export default Layout

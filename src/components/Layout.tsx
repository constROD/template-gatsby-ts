import { LayoutWrapper } from './Layout.styled';

import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <div className="content-main">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;

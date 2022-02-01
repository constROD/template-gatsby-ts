import { LayoutWrapper } from './Layout.styled';

import React from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <div>Header</div>
      {children}
      <div>Footer</div>
    </LayoutWrapper>
  );
};

export default Layout;

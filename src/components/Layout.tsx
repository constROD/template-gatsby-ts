import { LayoutWrapper } from './Layout.styled';

import React from 'react';
import { useAsyncFn } from 'react-use';
import { APP_ZONE } from 'shared/configs/App';
import { useAppSelector } from 'shared/hooks/useRedux';
import { TestActions } from 'shared/redux/Test/Actions';

const Layout: React.FC = ({ children }) => {
  const { increment } = TestActions();
  const count = useAppSelector(state => state.tests.count);

  const [, incrementAsync] = useAsyncFn(async () => {
    increment();
  });

  console.log('APP_ZONE: ', APP_ZONE);
  console.log('count: ', count);

  return (
    <LayoutWrapper>
      <button onClick={incrementAsync}>Increment</button>
      <div>count: {count}</div>
      <div className="content-main">{children}</div>
    </LayoutWrapper>
  );
};

export default Layout;

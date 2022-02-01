import Layout from 'components/Layout';
import React from 'react';
import { useAsyncFn } from 'react-use';
import { APP_ZONE } from 'shared/configs/App';
import { useAppSelector } from 'shared/hooks/useRedux';
import { TestActions } from 'shared/redux/Test/Actions';

const IndexPage: React.FC = () => {
  const { increment } = TestActions();
  const count = useAppSelector(state => state.tests.count);

  const [, incrementAsync] = useAsyncFn(async () => {
    increment();
  });

  console.log('APP_ZONE: ', APP_ZONE);
  console.log('count: ', count);

  return (
    <Layout>
      Index Page
      <button onClick={incrementAsync}>Increment</button>
      <div>count: {count}</div>
    </Layout>
  );
};

export default IndexPage;

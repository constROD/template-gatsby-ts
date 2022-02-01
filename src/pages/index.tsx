import Layout from 'components/Layout';
import React from 'react';
import { useAsyncFn } from 'react-use';
import { APP_ZONE } from 'shared/configs/App';
import { useAppDispatch, useAppSelector } from 'shared/hooks/useRedux';
import { testIncrementAsync } from 'shared/redux/Test/Thunks';

const IndexPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.tests.count);

  console.log('APP_ZONE: ', APP_ZONE);

  const [, incrementAsync] = useAsyncFn(async () => {
    await dispatch(testIncrementAsync());
  });

  return (
    <Layout>
      Index Page <button onClick={incrementAsync}>Increment</button> | count: {count}
    </Layout>
  );
};

export default IndexPage;

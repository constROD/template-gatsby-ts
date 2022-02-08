import Layout from './src/components/Layout';

import React from 'react';

export default ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

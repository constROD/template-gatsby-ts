import AuthenticatedRoute from 'components/AuthenticatedRoute';
import Home from 'components/Home/Home';
import Layout from 'components/Layout';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <AuthenticatedRoute>
      <Layout>
        <Home />
      </Layout>
    </AuthenticatedRoute>
  );
};

export default HomePage;

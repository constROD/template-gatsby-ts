import About from 'components/About/About';
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import Layout from 'components/Layout';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <AuthenticatedRoute>
      <Layout>
        <About />
      </Layout>
    </AuthenticatedRoute>
  );
};

export default AboutPage;

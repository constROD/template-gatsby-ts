import About from 'components/About/About';
import AuthenticatedRoute from 'components/AuthenticatedRoute';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <AuthenticatedRoute>
      <About />
    </AuthenticatedRoute>
  );
};

export default AboutPage;

import About from 'components/About/About';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const AboutPage: React.FC = () => {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
};

export default AboutPage;

import Home from 'components/Home/Home';
import React from 'react';
import PageLayout from 'shared/components/Layouts/PageLayout';

const HomePage: React.FC = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

export default HomePage;

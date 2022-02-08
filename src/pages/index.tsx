import AuthenticatedRoute from 'components/AuthenticatedRoute';
import Home from 'components/Home/Home';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <AuthenticatedRoute>
      <Home />
    </AuthenticatedRoute>
  );
};

export default HomePage;

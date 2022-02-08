import AuthenticatedRoute from 'components/AuthenticatedRoute';
import Login from 'components/Login/Login';
import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <AuthenticatedRoute>
      <Login />
    </AuthenticatedRoute>
  );
};

export default IndexPage;

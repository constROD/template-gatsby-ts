import AuthenticatedRoute from 'components/AuthenticatedRoute';
import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <AuthenticatedRoute>
      <div>404 Not Found</div>
    </AuthenticatedRoute>
  );
};

export default NotFoundPage;

import React from 'react';
import { Helmet } from 'react-helmet';

const Root: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Template Gatsby TypeScript</title>

        {/* <!--  Primary --> */}
        <meta name="title" content="constROD's Website" />
        <meta name="description" content="constROD's Personal Website" />
        <meta name="application_name" content="constROD's App" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="constROD's Website" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="constROD's Website" />
        <meta property="og:url" content="https://constrod.me" />
        <meta property="og:image" content="https://constrod.me/banner.png" />
        <meta property="og:description" content="constROD's Personal Website" />

        {/* <!--  Twitter --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content="banner_description" />

        {/* <!--  For Analytics --> */}
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@username" />
      </Helmet>
      {children}
    </React.Fragment>
  );
};

export default Root;

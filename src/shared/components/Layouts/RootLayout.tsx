import { RootLayoutWrapper } from './RootLayout.styled';

import React from 'react';
import { Helmet } from 'react-helmet';
import '../../../static/global.css';

const RootLayout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <RootLayoutWrapper>
      <Helmet>
        <title>Template Gatsby TypeScript</title>

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

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

        {/* <!--  Favicon --> */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* <!-- Fonts --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/global.css" />
      </Helmet>
      {children}
    </RootLayoutWrapper>
  );
};

export default RootLayout;

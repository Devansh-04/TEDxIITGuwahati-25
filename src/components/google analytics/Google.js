import React from 'react';
import { Helmet } from 'react-helmet';

const GoogleAnalytics = () => {
  const GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;

  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;

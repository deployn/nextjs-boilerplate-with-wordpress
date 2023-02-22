/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

import '../styles/global.css';
import '../styles/wordpress.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import PlausibleProvider from 'next-plausible';

import { useApollo } from '@/lib/apollo';
import { AppConfig } from '@/utils/AppConfig';

if (process.env.NODE_ENV === 'development') {
  import('@impulse.dev/runtime').then((impulse) =>
    impulse.run({
      tailwindConfig: require('../../tailwind.config'),
    })
  );
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  if (AppConfig.plausibleUrl !== '') {
    return (
      <PlausibleProvider
        customDomain={AppConfig.plausibleUrl}
        domain={AppConfig.siteUrl}
        selfHosted={true}
      >
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </PlausibleProvider>
    );
  }

  return (
    <ApolloProvider client={apolloClient}>
      {AppConfig.umamiScriptUrl !== '' && AppConfig.umamiWebsiteId !== '' && (
        <Script
          data-website-id={AppConfig.umamiWebsiteId}
          src={AppConfig.umamiScriptUrl}
          strategy="afterInteractive"
        />
      )}
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;

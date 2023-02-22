/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

import '../styles/global.css';
import '../styles/wordpress.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import { useApollo } from '@/lib/apollo';

if (process.env.NODE_ENV === 'development') {
  import('@impulse.dev/runtime').then((impulse) =>
    impulse.run({
      tailwindConfig: require('../../tailwind.config'),
    })
  );
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;

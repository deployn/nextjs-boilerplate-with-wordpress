import '../styles/global.css';
import '../styles/wordpress.css';

import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';

import { useApollo } from '@/lib/apolloClient';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;

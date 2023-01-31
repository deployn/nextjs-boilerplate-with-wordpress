/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */

import '../styles/global.css';
import '../styles/wordpress.css';

import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  import('@impulse.dev/runtime').then((impulse) =>
    impulse.run({
      tailwindConfig: require('../../tailwind.config'),
    })
  );
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;

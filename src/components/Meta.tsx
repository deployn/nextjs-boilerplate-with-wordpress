import Head from 'next/head';
import { useRouter } from 'next/router';

import Seo from '@/components/Seo';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
};

const Meta = ({ ...props }: SeoProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/favicon/apple-touch-icon.png`}
          key="apple"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${router.basePath}/favicon/favicon-32x32.png`}
          key="icon32"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${router.basePath}/favicon/favicon-16x16.png`}
          key="icon16"
        />
        <link
          rel="icon"
          href={`${router.basePath}/favicon/favicon.ico`}
          key="favicon"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href={`${router.basePath}/favicon/android-chrome-512x512.png`}
          key="android512"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${router.basePath}/favicon/android-chrome-192x192.png`}
          key="android192"
        />
      </Head>
      <Seo {...props} />
    </>
  );
};

export default Meta;

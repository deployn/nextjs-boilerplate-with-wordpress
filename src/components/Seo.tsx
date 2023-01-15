import { NextSeo } from 'next-seo';

import { AppConfig } from '@/utils/AppConfig';

const Seo = ({ ...props }) => {
  return (
    <NextSeo
      title={props.title || AppConfig.siteName}
      description={props.description || AppConfig.siteDescription}
      canonical={props.canonical}
      openGraph={{
        url: props.url || AppConfig.siteUrl,
        title: props.title || AppConfig.title,
        description: props.description || AppConfig.siteDescription,
        locale: AppConfig.locale,
        site_name: AppConfig.siteName,
      }}
      twitter={{
        handle: props.creator || AppConfig.twitterHandle,
        site: AppConfig.twitterSite,
        cardType: AppConfig.twitterCardType,
      }}
    />
  );
};

export default Seo;

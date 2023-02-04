import NextLink from 'next/link';

import ExternalLink from '@/components/ExternalLink';
import { AppConfig } from '@/utils/AppConfig';

const domain = AppConfig.siteUrl;

// WordPress API URL without /graphql

const wpDomain = process.env.WORDPRESS_API_URL?.replace(
  '/graphql',
  ''
) as string;

const style = {
  base: 'text-primary-500 hover:text-primary-700 transition duration-150 ease-in-out cursor-pointer focus:underline focus:text-primary-700 focus:shadow-outline focus:shadow-outline-blue',
};

type LinkProps = {
  href: string;
  children: React.ReactNode | React.ReactNode[] | string;
  className?: string;
};

const Link = ({ href, children, className, ...props }: LinkProps) => {
  const classes = [style.base, className].join(' ');

  if (
    href.toString().startsWith('/') ||
    href.toString().startsWith(domain) ||
    href.toString().startsWith('http://localhost')
  ) {
    return (
      <NextLink href={href} className={classes} {...props}>
        {children}
      </NextLink>
    );
  }
  if (href.toString().startsWith(wpDomain)) {
    const shortHref = href.toString().replace(wpDomain, '');
    return (
      <NextLink href={shortHref} className={classes} {...props}>
        {children}
      </NextLink>
    );
  }
  return (
    <ExternalLink href={href.toString()} {...props}>
      {children}
    </ExternalLink>
  );
};

export default Link;

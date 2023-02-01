import NextLink from 'next/link';

import ExternalLink from '@/components/ExternalLink';

const wpDomain = process.env.WORDPRESS_API_URL as string;

const style = {
  base: 'text-primary-500 hover:text-primary-700 transition duration-150 ease-in-out cursor-pointer focus:underline focus:text-primary-700 focus:shadow-outline focus:shadow-outline-blue',
};

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Link = ({ href, children, className, ...props }: LinkProps) => {
  const classes = [style.base, className].join(' ');
  if (href.toString().startsWith('/') || href.toString().startsWith(wpDomain)) {
    return (
      <NextLink href={href} className={classes} {...props}>
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

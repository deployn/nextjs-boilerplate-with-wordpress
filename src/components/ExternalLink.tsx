const style = {
  base: 'text-blue-500 hover:text-blue-700 underline hover:no-underline transition duration-150 ease-in-out cursor-pointer focus:underline focus:text-blue-700 focus:shadow-outline focus:shadow-outline-blue after:content-["_↗"]',
};

type ExternalLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const ExternalLink = ({
  href,
  children,
  className,
  ...props
}: ExternalLinkProps) => {
  const classes = [style.base, className].join(' ');
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className={classes}
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;

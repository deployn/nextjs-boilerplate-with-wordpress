import Link from '@/components/Link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="mb-4 text-lg font-medium">About Us</h2>
          <p className="mb-4 text-sm">
            This is a Next.js boilerplate with WordPress. It uses the WPGraphQL
            plugin to fetch data from WordPress.
          </p>
        </div>
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h2 className="mb-4 text-lg font-medium">Quick Links</h2>
          <ul className="list-none">
            <li className="mb-2">
              <Link className="text-sm" href="/">
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link className="text-sm" href="/contact">
                Contact Us
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className="text-sm"
                href="https://github.com/deployn/nextjs-boilerplate-with-wordpress"
              >
                Link to Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

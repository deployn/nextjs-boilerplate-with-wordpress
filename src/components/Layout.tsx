import { Assistant, Playfair_Display } from '@next/font/google';

import CookieBanner from '@/components/CookieBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Meta from '@/components/Meta';

const primaryFont = Assistant({
  subsets: ['latin'],
  variable: '--font-primary',
});

const headingFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
});

type LayoutProps = {
  title?: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
};

type PostLayoutProps = {
  title: string;
  description?: string;
  image?: string;
  children: React.ReactNode;
};

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <div className={`${primaryFont.variable} ${headingFont.variable}`}>
      <Meta {...props} />
      <div className="grid min-h-screen grid-rows-1">
        <div className="flex-1">
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
};

export default Layout;

const PostLayout = ({ children, ...props }: PostLayoutProps) => {
  return (
    <>
      <Meta {...props} />
      <main>{children}</main>
    </>
  );
};

export { PostLayout };

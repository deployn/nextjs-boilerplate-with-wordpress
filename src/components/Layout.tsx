import CookieBanner from '@/components/CookieBanner';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Meta from '@/components/Meta';

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
    <>
      <Meta {...props} />
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
    </>
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

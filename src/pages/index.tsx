import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Layout from '@/components/Layout';
import Link from '@/components/Link';
import { getAllPosts } from '@/lib/posts';

type IndexProps = {
  allPosts: {
    posts: {
      title: string;
      slug: string;
    }[];
  };
};

const Index: NextPage<IndexProps> = ({ allPosts: { posts } }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [statusCookie, setStatusCookie] = useState('');

  const getCookie = (name: any) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookie = parts.pop();
      if (cookie) {
        return cookie.split(';').shift();
      }
    }
    return null;
  };

  useEffect(() => {
    const acceptedCookie = getCookie('acceptedCookies');
    if (acceptedCookie === 'true') {
      setStatusCookie('accepted');
    } else {
      setStatusCookie('not accepted');
    }
  }, [statusCookie]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <Layout>
      <h1 className="m-4 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
        Index
      </h1>
      <p className="mb-8 font-primary">Cookies: {statusCookie}</p>

      {heroPost && (
        <section className="mb-8">
          <h2 className="mb-4 font-heading text-2xl font-medium">Hero Post</h2>
          <Link className="mb-2 block" href={`/posts/${heroPost.slug}`}>
            <h3 className="text-xl font-medium">{heroPost.title}</h3>
          </Link>
        </section>
      )}
      {morePosts.length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-medium">More Posts</h2>
          <ul className="list-none">
            {morePosts.map((post) => (
              <li key={post.slug}>
                <Link className="mb-2 block" href={`/posts/${post.slug}`}>
                  <h3 className="text-xl font-medium">{post.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const allPosts = await getAllPosts({
    queryIncludes: 'index',
  });

  return {
    props: {
      allPosts,
    },
  };
}

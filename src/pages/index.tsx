import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import Layout from '@/components/Layout';
import Link from '@/components/Link';
import { deleteCookie, getCookie } from '@/lib/cookies';
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
  const [statusCookie, setStatusCookie] = useState<string | null>(null);

  useEffect(() => {
    const acceptedCookie = getCookie('acceptedCookies');
    setStatusCookie(acceptedCookie === 'true' ? 'accepted' : 'not accepted');
  }, []);

  const handleDeleteCookie = () => {
    deleteCookie('acceptedCookies');
    setStatusCookie('not accepted');
  };

  return (
    <Layout>
      <h1 className="m-4 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
        Index
      </h1>
      <p className="mb-8 font-primary">Cookies: {statusCookie}</p>
      <button className="mb-8" onClick={handleDeleteCookie}>
        Delete Cookie
      </button>
      {posts[0] && (
        <section className="mb-8">
          <h2 className="mb-4 font-heading text-2xl font-medium">Last Post</h2>
          <Link className="mb-2 block" href={`/posts/${posts[0].slug}`}>
            <h3 className="text-xl font-medium">{posts[0].title}</h3>
          </Link>
        </section>
      )}

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-medium">More Posts</h2>
        <ul className="list-none">
          {posts.slice(1).map((post) => (
            <li key={post.slug}>
              <Link className="mb-2 block" href={`/posts/${post.slug}`}>
                <h3 className="text-xl font-medium">{post.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>
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

import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import Layout from '@/components/Layout';
import { getAllPostsForHome } from '@/lib/api';

type IndexProps = {
  allPosts: {
    edges: {
      node: {
        title: string;
        excerpt: string;
        slug: string;
        date: string;
        coverImage: {
          url: string;
        };
      };
    }[];
  };
};

const Index: NextPage<IndexProps> = ({ allPosts: { edges } }) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <Layout>
      <h1>Index</h1>
      {heroPost && (
        <section>
          <h2>Hero Post</h2>
          <Link href={`/posts/${heroPost.slug}`}>
            <h3>{heroPost.title}</h3>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: heroPost.excerpt }} />
        </section>
      )}
      {morePosts.length > 0 && (
        <section>
          <h2>More Posts</h2>
          <div>
            {morePosts.map(({ node }) => (
              <h3 key={node.slug}>{node.title}</h3>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
};

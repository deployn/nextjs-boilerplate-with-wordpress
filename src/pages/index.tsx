import type { GetStaticProps, NextPage } from 'next';

import Layout from '@/components/Layout';
import Link from '@/components/Link';
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
      <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
        Index
      </h1>
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
      <Link href="https://github.com/deployn/nextjs-boilerplate-with-wordpress">
        Link to Github
      </Link>
      <br />
      <Link href="/">Link to Home</Link>
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

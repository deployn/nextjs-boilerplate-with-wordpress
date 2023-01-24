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
          <h2 className="mb-4 text-2xl font-medium">Hero Post</h2>
          <Link className="mb-2 block" href={`/posts/${heroPost.slug}`}>
            <h3 className="text-xl font-medium">{heroPost.title}</h3>
          </Link>
          <div
            className="mb-6"
            dangerouslySetInnerHTML={{ __html: heroPost.excerpt }}
          />
        </section>
      )}
      {morePosts.length > 0 && (
        <section>
          <h2 className="mb-4 text-2xl font-medium">More Posts</h2>
          <ul className="list-none">
            {morePosts.map(({ node }) => (
              <li key={node.slug} className="mb-4">
                <Link className="block" href={`/posts/${node.slug}`}>
                  <h3 className="text-xl font-medium" key={node.slug}>
                    {node.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
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

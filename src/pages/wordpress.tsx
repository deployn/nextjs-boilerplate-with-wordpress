import { gql } from '@apollo/client';

import Layout from '@/components/Layout';
import client from '@/lib/client';

export function Wordpress(props: any) {
  return (
    <Layout>
      <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
        Wordpress
      </h1>
      <p>Wordpress</p>
      {props.posts.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        posts {
          nodes {
            id
            title
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: data.posts.nodes,
    },
  };
}

export default Wordpress;

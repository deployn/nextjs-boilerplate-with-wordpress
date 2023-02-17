import ErrorPage from 'next/error';
import { useRouter } from 'next/router';

import Layout from '@/components/Layout';
import PostBody from '@/components/PostBody';
import { getPostBySlug } from '@/lib/posts';

export default function Post({ post }: any) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
              {post.title}
            </h1>
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const { post } = await getPostBySlug(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

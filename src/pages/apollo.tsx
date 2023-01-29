import { useEffect, useState } from 'react';

import Layout from '@/components/Layout';
import PostList, {
  ALL_POSTS_QUERY,
  allPostsQueryVars,
} from '@/components/PostList';
import { addApolloState, initializeApollo } from '@/lib/apolloClient';

const Apollo = () => {
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

  return (
    <Layout>
      <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
        Apollo
      </h1>
      <p>Cookies: {statusCookie}</p>
      <PostList />
    </Layout>
  );
};

export default Apollo;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  });
}

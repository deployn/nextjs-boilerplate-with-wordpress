/* import {
  QUERY_ALL_POSTS,
  QUERY_ALL_POSTS_ARCHIVE,
  QUERY_ALL_POSTS_INDEX,
  QUERY_POST_BY_SLUG,
} from '@/data/posts';

import { initializeApollo } from './apolloClient';
import { sortObjectsByDate } from './datetime';

export function postPathBySlug(slug: string) {
  return `/post/${slug}`;
}

export async function getPostBySlug(slug: string) {
  const apolloClient = initializeApollo();

  let postData;

  try {
    postData = await apolloClient.query({
      query: QUERY_POST_BY_SLUG,
      variables: { slug },
    });
  } catch (error) {
    throw new Error('Error fetching post');
  }

  if (!postData?.data?.post) return { post: undefined };

  const { post } = postData.data;

  return { post };
}

const allPostsIncludesTypes = {
  all: QUERY_ALL_POSTS,
  archive: QUERY_ALL_POSTS_ARCHIVE,
  index: QUERY_ALL_POSTS_INDEX,
};

export async function getAllPosts(options = {}) {
  const { queryIncludes = 'index' }: any = options;

  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const posts = data?.data?.posts?.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

export async function getRecentPosts({ count, ...options }: any) {
  const { posts } = await getAllPosts(options);
  const sorted = sortObjectsByDate(posts);
  return { posts: sorted.slice(0, count) };
}
 */

export function getPostBySlug(slug: string): any {
  return getPostBySlug(slug);
}

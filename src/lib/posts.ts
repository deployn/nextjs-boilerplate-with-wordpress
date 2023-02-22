import {
  QUERY_ALL_POSTS,
  QUERY_ALL_POSTS_ARCHIVE,
  QUERY_ALL_POSTS_INDEX,
  QUERY_POST_BY_SLUG,
} from '@/data/posts';
import { initializeApollo } from '@/lib/apollo';

/**
 * postPathBySlug
 */

export function postPathBySlug(slug: string): string {
  return `/posts/${slug}`;
}

/**
 * mapPostData
 */

type Post = {
  author?: {
    node?:
      | {
          avatar?:
            | {
                height?: number | undefined;
                url?: string | undefined;
                width?: number | undefined;
              }
            | undefined;
          id?: string | undefined;
          name?: string | undefined;
          slug?: string | undefined;
        }
      | undefined;
    avatar?: {
      height?: number;
      url?: string;
      width?: number;
    };
    id?: string;
    name?: string;
    slug?: string;
  };
  categories?: {
    edges?: {
      node?: {
        id?: string;
        name?: string;
        slug?: string;
      };
    }[];
  };
  content?: string;
  date?: string;
  excerpt?: string;
  id?: string;
  slug?: string;
  title?: string;
  featuredImage?: {
    node?: {
      altText?: string;
      caption?: string;
      sourceUrl?: string;
      srcSet?: string;
      sizes?: string;
      id?: string;
    };
  };
  modified?: string;
  databaseId?: number;
  isSticky?: boolean;
};

export function mapPostData(post: Post = {}): Post {
  const data = { ...post };

  // Clean up the author object to avoid someone having to look an extra
  // level deeper into the node

  if (data.author) {
    data.author = {
      ...data.author.node,
    };
  }

  return data;
}

/**
 * getPostBySlug
 */

export async function getPostBySlug(slug: string) {
  const apolloClient = initializeApollo();
  const wpDomain = process.env.WORDPRESS_API_URL;
  if (!wpDomain) {
    throw new Error(
      'WORDPRESS_API_URL is not defined in environment variables'
    );
  }

  let postData;

  try {
    postData = await apolloClient.query({
      query: QUERY_POST_BY_SLUG,
      variables: {
        slug,
      },
    });
  } catch (error) {
    return { post: undefined };
  }

  if (!postData?.data.post) return { post: undefined };

  const post = [postData?.data.post].map(mapPostData)[0];

  return {
    post,
  };
}

/**
 * getAllPosts
 */

const allPostsIncludesTypes = {
  all: QUERY_ALL_POSTS,
  archive: QUERY_ALL_POSTS_ARCHIVE,
  index: QUERY_ALL_POSTS_INDEX,
};

type Options = {
  queryIncludes?: 'all' | 'archive' | 'index';
};

export async function getAllPosts(options: Options = {}) {
  const { queryIncludes = 'index' } = options;

  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: allPostsIncludesTypes[queryIncludes],
  });

  const posts = data?.data.posts.edges.map(({ node = {} }) => node);

  return {
    posts: Array.isArray(posts) && posts.map(mapPostData),
  };
}

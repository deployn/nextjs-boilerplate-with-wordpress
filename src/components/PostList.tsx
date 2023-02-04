import { gql, useQuery } from '@apollo/client';
import HTMLReactParser from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

export const ALL_POSTS_QUERY = gql`
  query allPosts {
    posts {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
  }
`;

export const allPostsQueryVars = {
  skip: 0,
  first: 10,
};

const PostList = () => {
  const { data, loading, error } = useQuery(ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
    notifyOnNetworkStatusChange: true,
  });

  const allPosts = data?.posts;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {allPosts.edges.map((post: any) => {
        const sanitizedHTML = DOMPurify.sanitize(post.node.content);
        return (
          <li key={post.node.id} className="mb-8">
            <h2 className="mb-2">{post.node.title}</h2>
            <div>{HTMLReactParser(sanitizedHTML)}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default PostList;

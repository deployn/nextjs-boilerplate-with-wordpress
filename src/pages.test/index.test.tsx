import { render, screen } from '@testing-library/react';

import Index from '@/pages/index';

jest.mock('@/lib/posts', () => ({
  getAllPosts: jest.fn(() => Promise.resolve({ posts: [] })),
}));

jest.mock('@/lib/apollo', () => ({
  initializeApollo: jest.fn(() => ({
    query: jest.fn(() => Promise.resolve({ data: {} })),
  })),
}));

describe('Index', () => {
  it('renders without crashing', async () => {
    render(<Index allPosts={{ posts: [] }} />);
    expect(screen.getByText('Index')).toBeInTheDocument();
  });

  it('renders more posts', async () => {
    const morePosts = [
      {
        title: 'More Post 1',
        slug: 'more-post-1',
      },
      {
        title: 'More Post 2',
        slug: 'more-post-2',
      },
    ];
    render(<Index allPosts={{ posts: morePosts }} />);
    morePosts.forEach((post) => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
    });
  });

  it('renders cookies', async () => {
    render(<Index allPosts={{ posts: [] }} />);
    expect(screen.getByText('Cookies: not accepted')).toBeInTheDocument();
  });

  it('renders cookies accepted', async () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'acceptedCookies=true',
    });
    render(<Index allPosts={{ posts: [] }} />);
    expect(screen.getByText('Cookies: accepted')).toBeInTheDocument();
  });

  it('renders cookies not accepted', async () => {
    Object.defineProperty(window.document, 'cookie', {
      writable: true,
      value: 'acceptedCookies=false',
    });
    render(<Index allPosts={{ posts: [] }} />);
    expect(screen.getByText('Cookies: not accepted')).toBeInTheDocument();
  });
});

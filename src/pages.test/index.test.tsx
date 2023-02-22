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
});

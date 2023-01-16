import { render, waitFor } from '@testing-library/react';

import PostBody from '@/components/PostBody';

describe('PostBody component', () => {
  describe('Render method', () => {
    it('should render a post body', async () => {
      const content = '<p>Random content</p>';

      const { container } = render(<PostBody content={content} />);

      await waitFor(() => {
        expect(container).toContainHTML(content);
      });
    });
  });
});

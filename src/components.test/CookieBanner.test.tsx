import { render, screen } from '@testing-library/react';

import CookieBanner from '@/components/CookieBanner';

describe('CookieBanner component', () => {
  describe('Render method', () => {
    it('should have at least one button', () => {
      render(<CookieBanner />);

      const button = screen.getAllByRole('button')[0];

      expect(button).toBeInTheDocument();
    });
  });
});

import { render, screen } from '@testing-library/react';

import Contact from '@/pages/contact';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication

describe('Contact page', () => {
  describe('Render method', () => {
    it('should have h1 tag', () => {
      render(<Contact />);

      const heading = screen.getByRole('heading', { level: 1 });

      expect(heading).toBeInTheDocument();
    });
  });

  describe('Form', () => {
    it('should have input for name', () => {
      render(<Contact />);

      const input = screen.getByLabelText(/name/i);

      expect(input).toBeInTheDocument();
    });

    it('should have input for email', () => {
      render(<Contact />);

      const input = screen.getByLabelText(/email/i);

      expect(input).toBeInTheDocument();
    });

    it('should have input for message', () => {
      render(<Contact />);

      const input = screen.getByLabelText(/message/i);

      expect(input).toBeInTheDocument();
    });
  });

  describe('Form validation', () => {
    it('should have error message if empty', async () => {
      render(<Contact />);

      const submitButton = screen.getByRole('button', { name: /submit/i });

      submitButton.click();

      const errorMessages = await screen.findAllByText(
        /This field is required/i
      );

      const errorMessage = errorMessages[0];

      expect(errorMessage).toBeInTheDocument();
    });
  });
});

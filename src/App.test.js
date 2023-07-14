import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/what's up, world/i)
  expect(text).toBeInTheDocument();
});

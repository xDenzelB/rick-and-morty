import { render, screen } from '@testing-library/react';
import App from './App';

test('Rick and Morty Crisis On Infinite Earths', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rick and Morty Crisis On Infinite Earths/i);
  expect(linkElement).toBeInTheDocument();
});

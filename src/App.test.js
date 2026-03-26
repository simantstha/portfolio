import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText(/Simant Shrestha/i)).toBeInTheDocument();
});

test('theme toggle button is present', () => {
  render(<App />);
  const toggle = screen.getByRole('button', { name: /toggle theme/i });
  expect(toggle).toBeInTheDocument();
});

test('theme toggle switches data-theme attribute', () => {
  document.documentElement.setAttribute('data-theme', 'dark');
  render(<App />);
  const toggle = screen.getByRole('button', { name: /toggle theme/i });
  fireEvent.click(toggle);
  expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  fireEvent.click(toggle);
  expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
});

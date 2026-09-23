import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page with navigation and the donate action', () => {
  render(<App />);
  expect(screen.getAllByText('Cœurs Festifs').length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  expect(screen.getAllByText('Faire un don').length).toBeGreaterThan(0);
});

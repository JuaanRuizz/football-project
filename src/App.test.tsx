import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import App from './App';

test('renders the title', () => {
  render(<App />);
  const title = screen.getByText(/Primera Divisón del Fútbol Colombiano/i);
  expect(title).toBeInTheDocument();
});
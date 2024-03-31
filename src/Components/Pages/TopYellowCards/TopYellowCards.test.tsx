import React from 'react';
import { render, screen } from '@testing-library/react';
import TopYellowCards from './TopYellowCards';
import { MemoryRouter } from 'react-router-dom';

describe('TopYellowCards component', () => {
  test('renders TopYellowCards component', async () => {
    render(
      <MemoryRouter>
        <TopYellowCards />
      </MemoryRouter>
    );

    expect(screen.getByText('Menú')).toBeInTheDocument();

    expect(screen.getByText('Top Yellow Cards')).toBeInTheDocument();
  });
});

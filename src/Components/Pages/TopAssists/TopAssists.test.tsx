import React from 'react';
import { render, screen } from '@testing-library/react';
import TopAssists from './TopAssists';
import { MemoryRouter } from 'react-router-dom';

describe('TopAssists component', () => {
  test('renders TopAssists component', async () => {
    render(
      <MemoryRouter>
        <TopAssists />
      </MemoryRouter>
    );


    expect(screen.getByText('Menú')).toBeInTheDocument();

    expect(screen.getByText('Top Assists')).toBeInTheDocument();
  });
});

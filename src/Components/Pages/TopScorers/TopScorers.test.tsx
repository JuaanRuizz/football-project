import React from 'react';
import { render, screen } from '@testing-library/react';
import TopScorers from './TopScorers';
import { MemoryRouter } from 'react-router-dom';

describe('TopScorers component', () => {
  test('renders TopScorers component', async () => {
    render(
      <MemoryRouter>
        <TopScorers />
      </MemoryRouter>
    );
    
    expect(screen.getByText('Goles')).toBeInTheDocument();
  }); 
});


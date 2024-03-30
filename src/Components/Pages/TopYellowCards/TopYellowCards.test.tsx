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

    await screen.findByText('Top Yellow Cards'); 
    expect(screen.getByText('Posición')).toBeInTheDocument();
    expect(screen.getByText('Nombre')).toBeInTheDocument();
    expect(screen.getByText('Edad')).toBeInTheDocument();
    expect(screen.getByText('Equipo')).toBeInTheDocument();
    expect(screen.getByText('Tarjetas Amarillas')).toBeInTheDocument();

    const playerNameElement = await screen.findByText(/Nombre/i); 
    expect(playerNameElement).toBeInTheDocument();
  });
});

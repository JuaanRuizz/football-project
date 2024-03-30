import React from 'react';
import { render, screen } from '@testing-library/react';
import Players from './Players';
import { MemoryRouter } from 'react-router-dom';

describe('Players component', () => {
  test('renders Players component', () => {
    render(
      <MemoryRouter>
        <Players />
      </MemoryRouter>
    );
    // Verificar que el texto y los enlaces se rendericen correctamente
    expect(screen.getByText('ESTADÍSTICAS DE JUGADORES')).toBeInTheDocument();
    expect(screen.getByText('Máximos goleadores')).toBeInTheDocument();
    expect(screen.getByText('Máximos asistidores')).toBeInTheDocument();
    expect(screen.getByText('Más tarjetas amarillas')).toBeInTheDocument();
    expect(screen.getByText('Menú')).toBeInTheDocument();
  });
});
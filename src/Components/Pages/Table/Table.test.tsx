import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';
import { MemoryRouter } from 'react-router-dom';

describe('Table component', () => {
  test('Table component', async () => {
    render(
      <MemoryRouter>
        <Table />
      </MemoryRouter>
    );

  

    await screen.findByText('Equipo'); 
    expect(screen.getByText('Escudo')).toBeInTheDocument();
    expect(screen.getByText('Posición')).toBeInTheDocument();
    expect(screen.getByText('Puntos')).toBeInTheDocument();

    expect(screen.getByText('Equipo')).toBeInTheDocument();
  });
});

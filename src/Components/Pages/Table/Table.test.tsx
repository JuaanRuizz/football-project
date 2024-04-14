/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Table from './Table';
import fetchMock from 'jest-fetch-mock';
import 'jest-localstorage-mock'; 

// Mock de los datos de la API para Table
const mockStandingsData = [{
  "team": {
    "id": 1,
    "name": "Alianza Petrolera",
    "logo": "logo-equipo-a.png"
  },
  "rank": 1,
  "points": 0
}];

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('Table component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    localStorage.clear(); // Limpia localStorage antes de cada prueba
  });

  test('renders Table component', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ response: [{ league: { standings: mockStandingsData } }] }));

    render(
      <BrowserRouter> 
        <Table />
      </BrowserRouter>
    );
    expect(screen.getByText('Escudo')).toBeInTheDocument();
    expect(screen.getByText('Posición')).toBeInTheDocument();
    expect(screen.getByText('Puntos')).toBeInTheDocument();
    expect(screen.getByText('Equipo')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText('Alianza Petrolera')).toBeInTheDocument();
      // expect(screen.getByTestId(`img-table-${mockStandingsData[0].team.id}`)).toBeVisible();
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });
});
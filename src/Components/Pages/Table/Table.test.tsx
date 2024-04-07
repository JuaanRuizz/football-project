/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Table from './Table';
import fetchMock from 'jest-fetch-mock';

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
  test('renders Table component', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ response: [{ league: { standings: mockStandingsData } }] }));

    render(
      <BrowserRouter> 
        <Table />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Escudo')).toBeInTheDocument();
      expect(screen.getByText('Posición')).toBeInTheDocument();
      expect(screen.getByText('Puntos')).toBeInTheDocument();
      expect(screen.getByText('Equipo')).toBeInTheDocument();
      expect(screen.getByText('Alianza Petrolera')).toBeInTheDocument();
      // expect(screen.getByText('1')).toBeInTheDocument();
    });
  });
});

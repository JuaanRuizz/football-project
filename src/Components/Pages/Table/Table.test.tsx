/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Table from './Table';
import fetchMock from 'jest-fetch-mock';
import 'jest-localstorage-mock'; 

const mockStandingsData = [{
  "team": {
    "id": 1,
    "name": "Alianza Petrolera",
    "logo": "https://media.api-sports.io/football/teams/1141.png"
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
    localStorage.clear(); 
  });

  test('renders Table component with images', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ response: [{ league: { standings: mockStandingsData } }] }));
    
    render(
      <BrowserRouter >
        <Table />
      </BrowserRouter>
    );
    
    await waitFor(() => {
      expect(screen.getByText('Escudo')).toBeInTheDocument();
      expect(screen.getByText('Posición')).toBeInTheDocument();
      expect(screen.getByText('Puntos')).toBeInTheDocument();
      expect(screen.getByText('Equipo')).toBeInTheDocument();
    });
    
    const specificImageData = mockStandingsData[0];
    const specificImage = screen.getByAltText(specificImageData.team.name);
    expect(specificImage).toBeInTheDocument();
    expect(specificImage).toHaveAttribute('src', specificImageData.team.logo);
    
    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import TopScorers from './TopScorers';

// Mock de los datos de la API para TopScorers
const mockTopScorersData = [
  {
    player: {
      photo: 'photo-url',
      name: 'M. Pérez',
      age: 34,
    },
    statistics: [
      {
        team: {
          logo: 'team-logo-url',
        },
        goals: {
          total: 28,
        },
      },
    ],
  },
  {
    player: {
      photo: 'photo-url',
      name: 'D. Moreno',
      age: 39,
    },
    statistics: [
      {
        team: {
          logo: 'team-logo-url',
        },
        goals: {
          total: 20,
        },
      },
    ],
  },
];

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('TopScorers component', () => {
  test('renders TopScorers component with player information', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockTopScorersData));

    render(
      <BrowserRouter>
        <TopScorers />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Posición')).toBeInTheDocument(); 
      expect(screen.getByText('Nombre')).toBeInTheDocument(); 
      expect(screen.getByText('Edad')).toBeInTheDocument(); 
      expect(screen.getByText('Equipo')).toBeInTheDocument(); 
      expect(screen.getByText('Goles')).toBeInTheDocument(); 
      expect(screen.getByText('M. Pérez')).toBeInTheDocument(); 
      expect(screen.getByText('D. Moreno')).toBeInTheDocument();  
    });
  });
});

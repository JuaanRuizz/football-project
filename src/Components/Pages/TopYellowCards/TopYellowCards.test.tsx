/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TopYellowCards from './TopYellowCards';
import fetchMock from 'jest-fetch-mock';

// Mock de los datos de la API para TopYellowCards
const mockTopYellowCardsData = [
  {
    player: {
      photo: 'photo-url',
      name: 'M. Puerta',
      age: 27,
    },
    statistics: [
      {
        team: {
          logo: 'team-logo-url',
        },
        cards: {
          yellow: 20,
        },
      },
    ],
  },
  {
    player: {
      photo: 'photo-url',
      name: 'J. Quiñónes',
      age: 27,
    },
    statistics: [
      {
        team: {
          logo: 'team-logo-url',
        },
        cards: {
          yellow: 16,
        },
      },
    ],
  },
];

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('TopYellowCards component', () => {
  test('renders TopYellowCards component with player information', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockTopYellowCardsData));

    render(
      <BrowserRouter>
        <TopYellowCards />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Posición')).toBeInTheDocument();
      expect(screen.getByText('Nombre')).toBeInTheDocument(); 
      expect(screen.getByText('Edad')).toBeInTheDocument();
      expect(screen.getByText('Equipo')).toBeInTheDocument(); 
      expect(screen.getByText('Tarjetas Amarillas')).toBeInTheDocument(); 
      expect(screen.getByText('M. Puerta')).toBeInTheDocument(); 
      expect(screen.getByText('J. Quiñónes')).toBeInTheDocument();
    });
  });
});

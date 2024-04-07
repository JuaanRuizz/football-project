/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import fetchMock from 'jest-fetch-mock';
import TopAssists from './TopAssists';

// Mock de los datos de la API para TopAssists
const mockTopAssistsData = [
  {
    player: {
      photo: 'photo-url',
      name: 'D. Quintero',
      age: 37,
    },
    statistics: [
      {
        team: {
          logo: 'team-logo-url',
        },
        goals: {
          assists: 13,
        },
      },
    ],
  },
  {
    player: {
      photo: 'photo-url',
      name: 'E. Torres',
      age: 27,
    },
    statistics: [
      {
        team: {
          logo: 'team-logo-url',
        },
        goals: {
          assists: 12,
        },
      },
    ],
  },
];

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('TopAssists component', () => {
  test('renders TopAssists component', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockTopAssistsData));

    render(
      <BrowserRouter>
        <TopAssists />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Posición')).toBeInTheDocument();
      expect(screen.getByText('Nombre')).toBeInTheDocument();
      expect(screen.getByText('Edad')).toBeInTheDocument();
      expect(screen.getByText('Equipo')).toBeInTheDocument();
      expect(screen.getByText('Asistencias')).toBeInTheDocument();
      expect(screen.getByText('D. Quintero')).toBeInTheDocument();
      expect(screen.getByText('E. Torres')).toBeInTheDocument();
      // expect(screen.getByText('13')).toBeInTheDocument();
      // expect(screen.getByText('12')).toBeInTheDocument();
    });
  });
});

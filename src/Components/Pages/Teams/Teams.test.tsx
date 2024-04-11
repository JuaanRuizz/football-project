/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Teams from './Teams';
import fetchMock from 'jest-fetch-mock';

const mockStandingsData = {
  "team": {
    "id": 1,
    "name": "Alianza Petrolera",
  },
};

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders Teams component', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({ response: [{ league: { standings: [mockStandingsData] } }] }));

  render(
    <BrowserRouter> 
      <Teams />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(screen.getByText('Lista de Equipos Primera División')).toBeInTheDocument();
    expect(screen.getByText('Alianza Petrolera')).toBeInTheDocument();
  });
});

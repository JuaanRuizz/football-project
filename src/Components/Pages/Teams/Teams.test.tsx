import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import Teams from './Teams';

test('renders Teams component', () => {
  render(
    <BrowserRouter> 
      <Teams />
    </BrowserRouter>
  );

  
  expect(screen.getByText('Lista de Equipos Primera División')).toBeInTheDocument();
});

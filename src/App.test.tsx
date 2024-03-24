import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import App from './App';

test('renders the title', () => {
  render(<App />);
  const title = screen.getByText(/Primera Divisón del Fútbol Colombiano/i);
  expect(title).toBeInTheDocument();
});

test('link "Estadísticas" should navigate to "/navmenu"', () => {
  render(<App />);
  const link = screen.getByText('Estadísticas');
  expect(link).toBeInTheDocument(); 
  expect(link).toHaveAttribute('href', '/navmenu'); 
});

test('link "Home" should navigate to "/home"', () => {
  render(<App />);
  userEvent.click(screen.getByText('Estadísticas')); 
  
  const homeLink = screen.getByText('Home'); 
  expect(homeLink).toBeInTheDocument(); 
  expect(homeLink).toHaveAttribute('href', '/home'); 
});

test('link "Table" should navigate to "/table"', () => {
  render(<App />);
  userEvent.click(screen.getByText('Estadísticas')); 
  
  const tableLink = screen.getByText('Tabla de Posiciones'); 
  expect(tableLink).toBeInTheDocument(); 
  expect(tableLink).toHaveAttribute('href', '/table'); 
});

test('link "Teams" should navigate to "/teams"', () => {
  render(<App />);
  userEvent.click(screen.getByText('Estadísticas')); 
  
  const teamsLink = screen.getByText('Equipos'); 
  expect(teamsLink).toBeInTheDocument(); 
  expect(teamsLink).toHaveAttribute('href', '/teams'); 
});

test('link "Players" should navigate to "/players"', () => {
  render(<App />);
  userEvent.click(screen.getByText('Estadísticas')); 
  
  const playersLink = screen.getByText('Jugadores'); 
  expect(playersLink).toBeInTheDocument(); 
  expect(playersLink).toHaveAttribute('href', '/players'); 
});
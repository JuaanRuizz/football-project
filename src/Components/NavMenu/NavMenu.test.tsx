import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NavMenu from './NavMenu';

describe('NavMenu component', () => {
//   test('renders logo and title', () => {
//     render(<NavMenu />, { wrapper: MemoryRouter });

//     const logo = screen.getByAltText('Logo');
//     expect(logo).toBeInTheDocument();

    // const title = screen.getByText('Liga BetPlay Dimayor');
    // expect(title).toBeInTheDocument();
//   });

  test('renders navigation links', () => {
    render(<NavMenu />, { wrapper: MemoryRouter });

    const homeLink = screen.getByRole('link', { name: /Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/home');

    const tableLink = screen.getByRole('link', { name: /Tabla de Posiciones/i });
    expect(tableLink).toBeInTheDocument();
    expect(tableLink).toHaveAttribute('href', '/table');

    const teamsLink = screen.getByRole('link', { name: /Equipos/i });
    expect(teamsLink).toBeInTheDocument();
    expect(teamsLink).toHaveAttribute('href', '/teams');

    const playersLink = screen.getByRole('link', { name: /Jugadores/i });
    expect(playersLink).toBeInTheDocument();
    expect(playersLink).toHaveAttribute('href', '/players');
  });

//   test('renders footer', () => {
//     render(<NavMenu />, { wrapper: MemoryRouter });

//     const footer = screen.getByText('Liga BetPlay Dimayor');
//     expect(footer).toBeInTheDocument();
//   });

  test('renders team logos', () => {
    render(<NavMenu />, { wrapper: MemoryRouter });

    const aguilasLogo = screen.getByAltText('aguilas');
    expect(aguilasLogo).toBeInTheDocument();

    
  });
});

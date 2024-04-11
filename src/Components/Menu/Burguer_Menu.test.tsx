import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import BurguerMenu from './Burguer_Menu';

test('visible links when menu is open', () => {
  render(
    <Router>
      <BurguerMenu />
    </Router>
  );

  const menuButton = screen.getByRole('button', { name: '' });
  fireEvent.click(menuButton);

  // Add your assertions here
});

test('hidden links when menu is closed', () => {
  render(
    <Router>
      <BurguerMenu />
    </Router>
  );

  const menuButton = screen.getByRole('button', { name: '' });
  fireEvent.click(menuButton);

  // Add your assertions here
});

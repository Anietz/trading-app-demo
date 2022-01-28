import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../src/pages/HomePage';

test('Home page', () => {
  render(<HomePage  />  );
  expect(screen.getByText('Crypto Assets')).toBeInTheDocument();
  // const linkElement = screen.getByText(/Crypto Assets/i);
  // expect(linkElement).toBeInTheDocument();
});

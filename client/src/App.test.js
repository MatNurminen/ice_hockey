// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';

// describe('App', () => {
//   it('renders App componnent', () => {
//     render(<App />);
//     screen.debug();
//     expect(screen.getByText(/learn react/i)).toBeInTheDocument();
//   });
// });

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './components/layout/components/Footer/';

describe('Footer', () => {
  it('renders Footer component', () => {
    render(<Footer />);
    expect(screen.getByText(/stats/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText('logo')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeEnabled();
    //expect(screen.getByText(/stats/i)).toHaveClass('Footer-logo-2');
  });
});

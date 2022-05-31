import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavBar from './NavBar';
import { Navbar } from 'react-bootstrap';

describe('<NavBar />', () => {
  test('it should mount', () => {
    render(<Navbar/>);
    
    const navBar = screen.getByTestId('NavBar');

    expect(navBar).toBeInTheDocument();
  });
});
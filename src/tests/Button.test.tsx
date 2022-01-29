import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('default button', () => {
    render(<Button children="test" />);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass("primary-btn");
});


test('active button', () => {
    render(<Button isActive={true} children="test" />);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass("active");
});


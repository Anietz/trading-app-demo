import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput,{FormInputType} from '../components/FormInput';

test('default button', () => {
    render(<FormInput type={FormInputType.text}  />);
    const input = screen.getByRole('textbox');
    expect(input).toBeTruthy();
});

//
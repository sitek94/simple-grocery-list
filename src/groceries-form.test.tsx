import * as React from 'react';
import { render, screen } from '@testing-library/react';

import GroceriesForm from './groceries-form';

describe('GroceriesForm', () => {
  it('renders correctly', () => {
    render(<GroceriesForm onAdd={() => {}} />);

    expect(screen.getByText(/Icon/)).toBeInTheDocument();
    expect(screen.getByText(/Name/)).toBeInTheDocument();
    expect(screen.getByText(/Amount/)).toBeInTheDocument();
    expect(screen.getByText(/Add/)).toBeInTheDocument();
  });
});

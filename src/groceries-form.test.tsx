import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import GroceriesForm from './groceries-form';

describe('GroceriesForm', () => {
  it('renders correctly', () => {
    render(<GroceriesForm onAdd={() => {}} />);

    expect(screen.getByText(/Icon/)).toBeInTheDocument();
    expect(screen.getByText(/Name/)).toBeInTheDocument();
    expect(screen.getByText(/Amount/)).toBeInTheDocument();
    expect(screen.getByText(/Add/)).toBeInTheDocument();
  });

  it('calls the onAdd function with the form values', () => {
    const onAdd = jest.fn();
    render(<GroceriesForm onAdd={onAdd} />);

    fireEvent.change(screen.getByLabelText('Icon'), {
      target: { value: '🍫' },
    });
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Chocolate' },
    });
    fireEvent.change(screen.getByLabelText('Amount'), {
      target: { value: '5' },
    });

    fireEvent.click(screen.getByText('Add'));

    expect(onAdd).toBeCalledWith({
      icon: '🍫',
      name: 'Chocolate',
      amount: 5,
    });
  });
});

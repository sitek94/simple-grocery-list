import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';

import GroceriesForm from './groceries-form';

describe('GroceriesForm', () => {
  it('renders correctly', () => {
    const { getByText } = render(<GroceriesForm onAdd={() => {}} />);

    expect(getByText(/Icon/)).toBeInTheDocument();
    expect(getByText(/Name/)).toBeInTheDocument();
    expect(getByText(/Amount/)).toBeInTheDocument();
    expect(getByText(/Add/)).toBeInTheDocument();
  });

  it('calls the onAdd function with the form values', () => {
    const onAdd = jest.fn();
    const { getByLabelText, getByText } = render(
      <GroceriesForm onAdd={onAdd} />
    );

    fireEvent.change(getByLabelText('Icon'), {
      target: { value: '🍫' },
    });
    fireEvent.change(getByLabelText('Name'), {
      target: { value: 'Chocolate' },
    });
    fireEvent.change(getByLabelText('Amount'), {
      target: { value: '5' },
    });

    fireEvent.click(getByText('Add'));

    expect(onAdd).toBeCalledWith({
      icon: '🍫',
      name: 'Chocolate',
      amount: 5,
    });
  });

  it('cleans up the inputs', () => {
    const onAdd = jest.fn();
    const { getByLabelText, getByText } = render(
      <GroceriesForm onAdd={onAdd} />
    );

    const iconInput = getByLabelText('Icon') as HTMLInputElement;
    const nameInput = getByLabelText('Name') as HTMLInputElement;
    const amountInput = getByLabelText('Amount') as HTMLInputElement;

    fireEvent.change(iconInput, {
      target: { value: '🍫' },
    });
    fireEvent.change(iconInput, {
      target: { value: 'Chocolate' },
    });
    fireEvent.change(amountInput, {
      target: { value: 5 },
    });

    fireEvent.click(getByText('Add'));

    expect(iconInput.value).toBe('');
    expect(nameInput.value).toBe('');
    expect(amountInput.value).toBe('1');
  });
});

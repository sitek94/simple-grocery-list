import * as React from 'react';

type FormProps = {
  icon: string;
  name: string;
  amount: number;
};

type GroceriesFormProps = {
  onAdd: ({ icon, name, amount }: FormProps) => void;
};

export default function GroceriesForm({ onAdd }: GroceriesFormProps) {
  const [icon, setIcon] = React.useState('');
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onAdd({ icon, name, amount });
    setIcon('');
    setName('');
    setAmount(1);
  };

  return (
    <form className="groceries-form" onSubmit={handleSubmit}>
      <div className="form-control inline">
        <label htmlFor="icon">Icon</label>
        <input
          id="icon"
          type="text"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          required
        />
      </div>
      <div className="form-control inline">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        />
      </div>
      <input className="submit-btn" type="submit" value="Add" />
    </form>
  );
}

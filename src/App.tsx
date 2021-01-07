import * as React from 'react';

import GroceriesForm from './groceries-form';

function App() {
  const [groceries, setGroceries] = React.useState([
    { icon: '🥦', name: 'Broccoli', amount: 10 },
    { icon: '🥛', name: 'Milk', amount: 2 },
  ]);

  const addProduct = () => {};

  return (
    <div className="App">
      <h1>Grocery List</h1>
      <GroceriesForm onAdd={addProduct} />
      <hr />
      <ul>
        {groceries.map(({ icon, name, amount }) => (
          <li key={name}>
            {icon ? <span className="icon">{icon}</span> : null}
            {name} x {amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

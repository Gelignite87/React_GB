import { useState } from 'react';
import { FormClass } from './components/classes/FormClass';
import { FormFunc } from './components/func/FormFunc';

export function App() {
  const [toggle, setToggle] = useState(true)
  const [arr] = useState([{ name: 'Biba' }, { name: 'Boba' }, { name: 'Giga' }, { name: 'Goga' },])
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <hr />
      <h2>{toggle ? 'Function Component' : 'Classes Component'}</h2>
      {toggle ? <FormFunc title='Function Component' /> : <FormClass />}
      <ul>
        {arr.map((item) => (<li key={item.name}>{item.name}</li>))}
      </ul>
    </>
  );
}
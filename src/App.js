import { useState } from 'react';
import { FormClass } from './components/classes/FormClass';
import { FormFunc } from './components/func/FormFunc';
import { Massage } from './components/func/Massage';

export function App() {
  const [toggle, setToggle] = useState(true)
  const [arr] = useState([{ name: 'Biba' }, { name: 'Boba' }, { name: 'Giga' }, { name: 'Goga' },])
  const text = "Текст сообщения для домашнего задания"
  return (
    <>
      <Massage text={text} />
      <FormClass />
      <hr />
      <button onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'}</button>
      {toggle && <FormFunc title='Function Component'/>}
      <ul>
        {arr.map((item) => (<li key={item.name}>{item.name}</li>))}
      </ul>
    </>
  );
}
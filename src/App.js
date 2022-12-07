import { useState } from 'react';
import { FormClass } from './components/classes/FormClass';
import { FormFunc } from './components/func/FormFunc';

export function App() {
  const [toggle, setToggle] = useState(true)
  const [messageList] = useState([{ text: 'Biba', autor: 'noname' }, { text: 'Boba', autor: 'noname' }, { text: 'Giga', autor: 'noname' }, { text: 'Goga', autor: 'noname' },])
  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <hr />
      <h2>{toggle ? 'Function Component' : 'Classes Component'}</h2>
      {toggle ? <FormFunc title='Function Component' /> : <FormClass />}
      <ul>
        <h2 className='DZ'>Домашнее задание:</h2>
        {messageList.map((item) => (<li key={item.text}>Text: {item.text}, Autor: {item.autor}</li>))}
        <form>
          <input type="text" />
          <button>Отправка формы</button>
        </form>
      </ul>
    </>
  );
}
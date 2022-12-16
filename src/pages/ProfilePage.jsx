import { useContext, useState } from 'react';
import { ThemeContext } from '../utils/ThemeContext';
import { useSelector, useDispatch } from "react-redux";
import { changeName } from "../store/profile/actions";

export function ProfilePage() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const name = useSelector((store) => store.name)
  const checked = useSelector((store) => store.checked)
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  return (
    <>
      <h1>Profile Page</h1>
      <p>{theme === 'light' ? 'День' : 'Ночь'}</p>
      <button onClick={toggleTheme}>Change theme</button>
      <hr />
      <h2>{name}</h2>
      <input type='text' value={value} onChange={(e)=> setValue(e.target.value)} />
      <button onClick={() => { dispatch(changeName(value)) }}>Change name</button>
      <br />
      <label>
        <input type='checkbox' className='DZ' checked={checked} onChange={() => dispatch({ type: 'CHANGE_CHECKBOX', payload: !checked })}></input> 
      &nbsp;Checkbox: <span className='DZ'>{checked.toString().toUpperCase()}</span></label>
    </>
  )
}
import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

export function ProfilePage() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <>
      <h1>Profile Page</h1>
      <p>{theme === 'light' ? 'День' : 'Ночь'}</p>
      <button onClick={toggleTheme}>Change theme</button>
    </>
  )
}
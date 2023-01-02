import { Outlet, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const navigate = [
  { id: 1, name: 'Main', to: '/' },
  { id: 2, name: 'Profile', to: '/profile' },
  { id: 3, name: 'Chat', to: '/chats' },
  { id: 4, name: 'Articles', to: '/articles' },
  { id: 5, name: 'SingIn', to: '/signin' },
  { id: 6, name: 'SingUp', to: '/signup' }
]

export function Header() {
  const name = useSelector((store) => store.name)
  return (
    <>
      <header>
        <nav className='header'>
          <ul>
            {navigate.map((link) => (
              <li key={link.id}>
              <NavLink to={link.to} style={({ isActive }) => ({
                  color: isActive ? 'green' : 'blue'
                })}>{link.name}</NavLink></li>
            ))}
          </ul>
          <p>{name}</p>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
}
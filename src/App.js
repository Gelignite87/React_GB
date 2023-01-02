import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList'
import { ThemeContext, defaultContext } from './utils/ThemeContext';
import { Articles } from './pages/ArticlesPage'
import { SingIn } from './pages/SignInPage'
import { SignUp } from './pages/SignUpPage'
import { firebaseAuth } from './services/firebase'
import { PrivateRoute } from './utils/PrivateRoute'
import { PublicRoute } from './utils/PublicRoute'
import { auth } from './store/profile/actions'

export function App() {
  const [theme, setTheme] = useState(defaultContext.theme)
  const toggleTheme = () => { setTheme(theme === 'light' ? 'dark' : 'light') }
  const dispatch = useDispatch()
  
  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(auth(true))
      } else {
        dispatch(auth(false))
      }
    })
    return unsubscribe
  }, [dispatch])

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<MainPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="chats" element={<PrivateRoute />}>
              <Route index element={<ChatList />}/>
              <Route path=":chatId" element={<ChatsPage />} />
            </Route>
              <Route path="articles" element={<Articles />} />
              <Route path="signin" element={<PublicRoute component={<SingIn />} />} />
              <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="*" element={<h2>404 Page not found!</h2>} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}
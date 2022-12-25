import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList'
import { ThemeContext, defaultContext } from './utils/ThemeContext';
import { Provider } from "react-redux";
import { store } from "./store";
import { Articles } from './pages/ArticlesPage'
import { SingIn } from './pages/SignInPage'
import { SignUp } from './pages/SignUpPage'

export function App() {
  const [theme, setTheme] = useState(defaultContext.theme)
  const toggleTheme = () => {setTheme(theme === 'light' ? 'dark' : 'light')}

  return (
    <>
        <Provider store={store}>
          <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Routes>
              <Route path='/' element={<Header />}>
                <Route index element={<MainPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="chats">
                  <Route index element={<ChatList />} />
                  <Route path=":chatId" element={<ChatsPage />} />
                </Route>
                  <Route path="articles" element={<Articles />} />
                  <Route path="singin" element={<SingIn />} />
                  <Route path="signup" element={<SignUp />} />
              </Route>
              <Route path="*" element={<h2>404 Page not found!</h2>} />
            </Routes>
          </ThemeContext.Provider>
        </Provider>
    </>
  );
}
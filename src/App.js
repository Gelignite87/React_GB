import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { PersistGate } from 'redux-persist/integration/react'
import { Header } from './components/Header'
import { MainPage } from './pages/MainPage'
import { ProfilePage } from './pages/ProfilePage'
import { ChatsPage } from './pages/ChatsPage'
import { ChatList } from './components/ChatList'
import { ThemeContext, defaultContext } from './utils/ThemeContext';
import { Provider } from "react-redux";
import { store, persistor } from "./store";

export function App() {
  // 1 // const [toggle, setToggle] = useState(true)
  // const [messages, setMessages] = useState({
  //   default: [
  //     { author: 'user', text: 'one text' },
  //     { author: 'user', text: 'two text' }
  //   ]
  // })
  const [theme, setTheme] = useState(defaultContext.theme)

  // 2 // const addMessage = useCallback((newMessage) => {
  //   setMessages([...messages, newMessage])
  // },[messages])

  // useEffect(() => {
  //   if (messages.length>0 && messages[messages.length-1].author ==='user') {
  //     const timeout = setTimeout(() => {
  //       addMessage({author: 'bot', text: 'I\'m BOT'})
  //     }, 1500)
  //     return () => { clearTimeout(timeout) }
  //   }
  // }, [messages, addMessage])

  // const chats = Object.keys(messages).map((chat) => {
  //   return ({ id: nanoid(), name:chat })
  // })

  // const onAddChat = (newChat) => {
  //   setMessages({...messages,[newChat.name]: []})
  // }

  // const onAddMessage = (chatId, newMassage) => {
  //   setMessages({ ...messages, [chatId]: [...messages[chatId], newMassage] })
  // }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      {/* 1 // <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <hr />
      <h2>{toggle ? 'Function Component' : 'Classes Component'}</h2>
      {toggle ? <FormFunc title='Function Component' /> : <FormClass />} */}
      {/* 2 // <h1>Welcome to chat!</h1>
      <Form addMessage={addMessage} />
      <MessageList messages={messages} /> */}

      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
          <ThemeContext.Provider value={{theme, toggleTheme}}>
            <Routes>
              <Route path='/' element={<Header />}>
                <Route index element={<MainPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="chats">
                  <Route index element={<ChatList />} />
                  <Route path=":chatId" element={<ChatsPage />} />
                </Route>
              </Route>
              <Route path="*" element={<h2>404 Page not found!</h2>} />
            </Routes>
          </ThemeContext.Provider>
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}
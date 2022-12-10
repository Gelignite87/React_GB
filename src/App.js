import { useCallback, useEffect, useState } from 'react';
// import { FormClass } from './components/classes/FormClass';
// import { FormFunc } from './components/func/FormFunc';
import { Form } from './components/func/FormSubmit';
import { MessageList } from './components/func/MessageList';

export function App() {
  // const [toggle, setToggle] = useState(true)
  const [messages, setMessages] = useState([])

  const addMessage = useCallback((newMessage) => {
    setMessages([...messages, newMessage])
  },[messages])

  useEffect(() => {
    if (messages.length>0 && messages[messages.length-1].author ==='user') {
      const timeout = setTimeout(() => {
        addMessage({author: 'bot', text: 'I\'m BOT'})
      }, 1500)
      return () => { clearTimeout(timeout) }
    }
  }, [messages, addMessage])

  return (
    <>
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <hr />
      <h2>{toggle ? 'Function Component' : 'Classes Component'}</h2>
      {toggle ? <FormFunc title='Function Component' /> : <FormClass />} */}
      
      <h1>Welcome to chat!</h1>
      <Form addMessage={addMessage} />
      <MessageList messages={messages} />
    </>
  );
}
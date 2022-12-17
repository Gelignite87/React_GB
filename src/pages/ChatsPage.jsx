import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Form } from '../components/FormSubmit'
import { MessageList } from '../components/MessageList'
import { ChatList } from '../components/ChatList'
import { HOCWithClasses } from "../utils/HOCWithClasses";

export function ChatsPage ({onAddChat, onAddMessage, messages, chats}) {
  const { chatId } = useParams()
  const MessageListWithClasses = HOCWithClasses(MessageList)

  useEffect(() => {
    if (chatId && messages[chatId]?.length > 0 && messages[chatId][messages[chatId].length - 1].author === 'user') {
      const timeout = setTimeout(() => {
        onAddMessage(chatId, {author: 'bot',text: 'Im BOT'})}, 1500)
      return () => {clearTimeout(timeout)}}
  }, [chatId, messages, onAddMessage])

  const handleAddMessage = (massage) => {
    if (chatId) {onAddMessage(chatId, massage)}}

  if(chatId && !messages[chatId]) {return <Navigate to="/chats" replace />}

  return (
    <>
      <h1>Welcome to chat!</h1>
      <ChatList />
      <Form handleAddMessage={handleAddMessage} />
      <MessageListWithClasses messages={chatId ? messages[chatId] : []} classes="border" />
    </>
  )
}
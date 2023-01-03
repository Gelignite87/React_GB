// import { useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { Form } from '../components/FormSubmit'
import { MessageList } from '../components/MessageList'
import { ChatList } from '../components/ChatList'
import { HOCWithClasses } from "../utils/HOCWithClasses";
import { useSelector } from "react-redux";
import { selectMessage } from "../store/messages/selectors";

export function ChatsPage () {
  const { chatId } = useParams()
  const messages = useSelector(selectMessage)
  const MessageListWithClasses = HOCWithClasses(MessageList)

  // useEffect(() => {
  //   if (chatId && messages[chatId]?.length > 0 && messages[chatId][messages[chatId].length - 1].author === 'user') {
  //     const timeout = setTimeout(() => {
  //       onAddMessage(chatId, {author: 'bot',text: 'Im BOT'})}, 1500)
  //     return () => {clearTimeout(timeout)}}
  // }, [chatId, messages, onAddMessage])

  // const handleAddMessage = (massage) => {
  //   if (chatId) {onAddMessage(chatId, massage)}}

  if(chatId && !messages[chatId]) {return <Navigate to="/chats" replace />}

  return (
    <>
      <h1>Welcome to chat!</h1>
      <ChatList />
      <Form />
      <MessageListWithClasses messages={chatId ? messages[chatId] : []} classes="border" />
    </>
  )
}
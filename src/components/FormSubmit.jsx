import { useState } from "react"
import { Button } from "./func/ui/Button"
import { useDispatch } from "react-redux";
import { addMessage } from "../store/messages/actions";
import { useParams } from "react-router-dom";

export const Form = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const {chatId} = useParams()
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // handleAddMessage({ author: 'user', text })
        dispatch(addMessage(chatId, text))
        setText('')
    }

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
                <Button>Add message</Button>
            </form>
        </>
    )
}
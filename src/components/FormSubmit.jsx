import { useState } from "react"
import { Button } from "./func/ui/Button"
import { useDispatch } from "react-redux";

export const Form = ({ handleAddMessage }) => {
    const [text, setText] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        handleAddMessage({ author: 'user', text })
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
import { useState } from "react"
import { Button } from "./ui/Button"

export const Form = ({ addMessage }) => {
    const [text, setText] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage({ author: 'user', text })
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
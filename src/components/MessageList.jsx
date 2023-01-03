export function MessageList({ messages }) {
    return (
        <>
            <h1>MessageList</h1>
            <ul>
                {Array.isArray(messages)
                    ? messages.map((el, i) => (<li key={i}>{el.author}: {el.text}</li>))
                    : `${messages.author}: ${messages.text}`
                }
            </ul>
        </>
    )
}
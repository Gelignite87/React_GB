export function MessageList({messages}) {
    return (
        <>
            <h1>MessageList</h1>
            <ul>
                {messages.map((el, i) => (
                    <li key={i}>{el.text}</li>
                ))}
            </ul>
        </>
    )
}
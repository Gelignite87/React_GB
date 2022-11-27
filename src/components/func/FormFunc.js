import { useState } from "react";
import styles from './FormFunc.module.sass'

export function FormFunc(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Bobo')

    const handleClick = () => {
        setCount(count+1)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    return (
        <>
            <h1 style={{color:'green'}}>{props.title}</h1>
            <h2 className={styles.border}>Name: {name}</h2>
            <input type="text" onChange={handleChange} />
            <p>COUNT: {count}</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}
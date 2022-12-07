import { useEffect, useState } from "react";
import { ChildFunc } from "./components/ChildFunc";
import styles from './FormFunc.module.sass'
import { Button } from "./ui/Button";

export function FormFunc(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('GB')
    const [show, setShow] = useState(true)

    console.log('log FormFunc');

    const handleClick = () => {
        setCount(count+1)
    }

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleShow = () => {
        setShow(!show)
    }

    useEffect(() => {
        console.log('FormFunc did mount');
    }, [])
    
    useEffect(() => {
        console.log('FormFunc did update');
    }, [count])

    return (
        <>
            <h1 style={{color:'green'}}>{props.title}</h1>
            <h2 className={styles.border}>Name: {name}</h2>
            <input type="text" onChange={handleChange} />
            <p>COUNT: {count}</p>
            <button onClick={handleShow}>Show</button>
            <Button type='button' className='btn' onClick={handleClick}>Click in FormFunc</Button>
            {show && <ChildFunc/>}
        </>
    )
}
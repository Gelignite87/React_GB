import { useEffect, useState, useCallback, useRef } from "react"
import { ChildFuncMemo } from "./components/ChildFuncMemo"
import styles from './FormFunc.module.sass'

export function FormFunc(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('GB')
    const [show, setShow] = useState(true)
    const myRef = useRef()

    console.log('log FormFunc')

    const handleClick = useCallback(() => { setCount((prevCount) => prevCount+1) }, [])
    const handleChange = (event) => {setName(event.target.value)}
    const handleShow = () => {setShow(!show)}

    useEffect(() => {console.log('FormFunc did mount')}, [])
    useEffect(() => {
        console.log('FormFunc did update')
        console.log(myRef.current.textContent)
    }, [count])

    return (
        <>
            <h1 style={{color:'green'}}>{props.title}</h1>
            <h2 className={styles.border}>Name: {name}</h2>
            <input type="text" onChange={handleChange} />
            <p ref={myRef}>COUNT: {count}</p>
            <button onClick={handleShow}>Show</button>
            <button onClick={handleClick}>Click in FormFunc</button>
            {show && <ChildFuncMemo handleClick={handleClick}/>}
        </>
    )
}
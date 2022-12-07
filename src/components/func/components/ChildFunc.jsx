import { useEffect, memo } from "react";

export const ChildFunc = memo(() => {
    
    console.log('log ChildFunc');

    useEffect(() => {
        console.log('ChildFunc did mount');
        const interval = setInterval(() => {
            console.log('Interval');
        },5000)
        return () => {
            console.log('ChildFunc will unmount');
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <h2>Child Component</h2>
        </>
    )
})
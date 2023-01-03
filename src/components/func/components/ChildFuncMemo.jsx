import { useEffect, memo } from "react";
import { Button } from "../ui/Button";

export const ChildFuncMemo = memo(({handleClick}) => { // memo работает если нет изменяющихся props, приходящие в props функции нужно обернуть в useCallback
    
    console.log('log ChildFuncMemo');

    useEffect(() => {
        console.log('ChildFunc did mount');
        const interval = setInterval(() => {
            console.log('Interval');
        },25000)
        return () => {
            console.log('ChildFunc will unmount');
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            <h2>Child Component with Memo</h2>
            <Button type='button' className='btn' onClick={handleClick}>Click in ChildFuncMemo</Button>
        </>
    )
})
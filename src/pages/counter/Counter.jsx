import React, { useRef, useState } from 'react'

export default function Counter() {
    const [num, setNum] = useState(100)
    const decrement = () => {
        setNum(num - 1)
    }
    const input = useRef() //和createRef用法一样
    const changeNum = (e) => {
        setNum(e)
    }

    const inputCurent = (e) => {
        setNum(e)
    }

    return (
        <>
            <h1>计数器</h1>
            <h3>{num}</h3>
            <button onClick={decrement}>-1</button>
            <input type="text" onBlur={(e) => changeNum(e.target.value)} />
            < input type="text" ref={input} onBlur={() => inputCurent(input.current.value - 0)} />
            <button onClick={() => setNum(num + 1)}>+1</button>
        </>
    )
}

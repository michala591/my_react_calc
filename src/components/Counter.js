import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    function add() {
        setCount(count + 1)
    }
    function sub() {
        setCount(count - 1)
    }
    function clear() {
        setCount(count === 0)
    }

    return (
        <div className="card">
            <h1 className="h1">{count}</h1>
            <button type="button" className="button" onClick={add}>
                Add
            </button>
            <button type="button" className="button" onClick={sub}>
                Sub
            </button>
            <button type="button" className="button" onClick={clear}>
                clear
            </button>
        </div>
    )
}

export default Counter
import React, { useState } from 'react'

function BasicCalc() {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)
    const [result, setResult] = useState(0)


    function double() {
        setResult(number1 * number2)
    }
    function add() {
        setResult(number1 + number2)
    }
    function sub() {
        setResult(number1 - number2)
    }
    function divide() {
        setResult(number1 / number2)
    }
    return (
        <div className="card">
            <input value={number1} onChange={(e) => setNumber1(Number(e.target.value))} />
            <input value={number2} onChange={(e) => setNumber2(Number(e.target.value))} />
            <div>
                <h1 className="h1">{result}</h1>
            </div>
            <div>
                <button type="button" className="button" onClick={double}>*</button>
                <button type="button" className="button" onClick={add}>+</button>
                <button type="button" className="button" onClick={sub}>-</button>
                <button type="button" className="button" onClick={divide}>/</button>
            </div>
        </div>
    )
}

export default BasicCalc
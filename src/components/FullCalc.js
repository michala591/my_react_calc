import React, { useState } from 'react'

function FullCalc() {
    const [number, setNumber] = useState(0);


    function clickNumber(i) {
        setNumber(i)
    }
    return (
        // <!-- Calculator Body -->
        // <!-- this is the second version -->
        <div className="calc-body">
            {/* <!-- <input id="result"> --> */}
            {/* <!-- Calculator Display Screen --> */}
            <div className="calc-screen">

                <div id="calc-operation">
                </div>
                <div>{number}</div>
            </div>

            {/* <!-- Calculator Buttons --> */}
            <div className="calc-button-row">
                <button onClick={() => (console.log("click"))} className="ac">AC</button>
                <button className="opt">&#43;&#47;&#8722;</button>
                <button className="opt">&#37;</button>
                <button className="opt">&#247;</button>
                <button onClick={() => (clickNumber(7))}>7</button>
                <button onClick={() => (clickNumber(8))}>8</button>
                <button onClick={() => (clickNumber(9))}>9</button>
                <button className="opt">&#215;</button>
                <button onClick={() => (clickNumber(4))}>4</button>
                <button onClick={() => (clickNumber(5))}>5</button>
                <button onClick={() => (clickNumber(6))}>6</button>
                <button className="opt">&#8722;</button>
                <button onClick={() => (clickNumber(1))}>1</button>
                <button onClick={() => (clickNumber(2))}>2</button>
                <button onClick={() => (clickNumber(3))}>3</button>
                <button onClick={() => (console.log("click"))} className="opt">+</button>
                <button onClick={() => (clickNumber(0))}>0</button>
                <button onClick={() => (clickNumber("."))}>.</button>
                <button>&#9003;</button>
                <button onClick={() => (clickNumber(7))} className="opt">=</button>
            </div>
        </div>)
}

export default FullCalc
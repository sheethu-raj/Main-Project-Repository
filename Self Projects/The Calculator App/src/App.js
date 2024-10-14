import React, { useState } from "react";

function App() {
    const [input, setInput] = useState("");

    const handleClear = () => {
        setInput("");
    };

    const handleClick = (value) => {
        setInput(input + value);
    };

   const handleEquals = () => {
        try {
            // eslint-disable-next-line
            setInput(eval(input).toString());
        }
        catch (err) {
            setInput(err);
        }
   };
    
    return (
        <div className="calculator">
            <h1>Calculator</h1>
            <input type="text" value={input}/>
            <div className="buttons">
                <button onClick={handleClear} className="clear">Clear</button>
                <button onClick={() => handleClick("/")}>/</button>
                <button onClick={() => handleClick("%")}>%</button>
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("-")}>-</button>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("*")}>*</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button onClick={handleEquals} className="equals">=</button>
            </div>
        </div>
    );
}

export default App;
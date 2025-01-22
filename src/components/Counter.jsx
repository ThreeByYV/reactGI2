import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

   
 
    function handleIncrement() {
        setCount(prev => prev + 1)
    }

    function handleDecrement() {
        setCount(prev => prev - 1)
    }

    return (
        <div style={{ transform: "scale(3)"}}>
            <div>{count}</div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div> 
    )
}
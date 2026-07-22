import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0);

    function increment(){
        setCount(c=> c+1);
    }
    function decrement(){
        setCount(c=> c-1);
    }
    function sayHello(){
        alert("Hello! Member");
    }
    function handleIncrement(){
        increment();
        sayHello();
    }
    function welcome(message){
        alert(message);
    }
    function handleClick(){
        alert("I was clicked");
    }

    return(
        <div>
            <h2>{count}</h2>
            <button onClick={handleIncrement}> Increment</button>
            <br />
            <button onClick={decrement}>Decrement</button>
            <br />
            <button onClick={()=>welcome("welcome")}>Say Welcome</button>
            <br />
            <button onClick={handleClick}>
                Click on me
            </button>
        </div>
    );
}
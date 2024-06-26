import { useState } from "react";

function Counter(){

    //안 바뀌는게 맞음
    //let을 사용하면 화면을 다시 그리지 않는다.
    
    //화면에 관련된 변수는 useState()를 사용해야 한다.
    const [count, setCount] = useState(0);
    
    const increment = () => {
        const newValue = count+1;
        setCount(newValue);
    };

    const decrement = () => {
        const newValue = count-1;
        setCount(newValue);
    };



    return(
        <>
        <h1>{count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </>
    );
}


// function Counter() {
// 	let count = 0;

// 	function increaseCount() {
// 		count += 1;
// 		console.log(count);
// 	}

// 	function decreaseCount() {
// 		count -= 1;
// 		console.log(count);
// 	}

// 	return (
// 		<div>
// 			<button onClick={increaseCount}>+1</button>
// 			<button onClick={decreaseCount}>-1</button>
// 			<p>Count : {count}</p>
// 		</div>
// 	);
// }

export default Counter;

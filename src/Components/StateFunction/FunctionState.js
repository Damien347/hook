import React, {useState} from 'react';

const FunctionState =() => {

    const [counter, setCounter] = useState(0)

    // useState nous permet d'avoir un state au sein d'une fonction
    


    return (
        <div>
            <p> Counter : {counter} </p>
            <button onClick={()=> setCounter(prevCounter => prevCounter +1)}>Hooks</button>
        </div>
    )
}

export default FunctionState;
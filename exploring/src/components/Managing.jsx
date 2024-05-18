import { useState } from "react";
import { useRef } from "react";

function Managing(){
    const refState = useRef(null);
    const [data, setData] = useState('');

    function handleChange(event){
        event.preventDefault();
        setData(refState.current.value);
    }
    return(
        <div>
            <h3>Managing Uncontrolled Components</h3>
            <h4>Value: {data}</h4>
            <input type="text" onChange={handleChange}
            ref={refState} placeholder="Enter something..."/>
        </div>
    )
}

export default Managing;
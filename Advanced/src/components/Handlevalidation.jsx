import { useState } from "react";
import { useRef } from "react";

function Handlevalidation(){
    const valRef = useRef('');
    const [valid, setValid] = useState(true);

    function handleSubmit(event){
        event.preventDefault();
    }

    function handleChange(event){
        event.preventDefault();
        setValid(valRef.current.value.length>=5);
    }

    return(
        <div>
            <h3>Real time input validation</h3>
            <form action="" onSubmit={handleSubmit}>
                <input
                   ref={valRef} 
                   type="text" 
                   placeholder="Enter atlease five characters" 
                   onChange={handleChange}/>
                   <p>{valid?null:'Enter atlest five characters'}</p>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Handlevalidation;
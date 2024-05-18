import { useEffect } from "react";
import { useRef } from "react";

function Focusable(){
    const refstate = useRef(null);

    useEffect(()=>{
       refstate.current.focus();
    },[]);

    return(
        <div>
            <h3>Creating a Focusable Input Field</h3>
            <input type="text" ref={refstate} />
        </div>
    )
}

export default Focusable;
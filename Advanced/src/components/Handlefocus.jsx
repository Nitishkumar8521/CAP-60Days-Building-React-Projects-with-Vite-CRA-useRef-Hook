import { useEffect } from "react";
import { useRef } from "react";

function Handlefocus(){
    const value1= useRef(null);
    const value2= useRef(null);
    const value3= useRef(null);

    useEffect(()=>{
        value1.current.focus();
    },[]);

    function handleTab(e,ref){
        if(e.key==='Tab'){
            e.preventDefault();
            ref.current.focus();
        }
    }

    return(
        <div>
            <h3>Dynamic form input focus</h3>
            <input ref={value1} onKeyDown={(e)=>handleTab(e,value2)} type="text" placeholder="value 1"/>
            <input ref={value2} onKeyDown={(e)=>handleTab(e,value3)} type="text" placeholder="value 2"/>
            <input ref={value3} onKeyDown={(e)=>handleTab(e,value1)} type="text" placeholder="value 3"/>
        </div>
    )
}

export default Handlefocus;
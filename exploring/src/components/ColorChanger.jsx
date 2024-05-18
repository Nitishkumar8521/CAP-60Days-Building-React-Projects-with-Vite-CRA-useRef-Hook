import { useRef } from "react";

function ColorChanger() {
    const divRef = useRef(null); 
    const colors = ['red', 'blue', 'green', 'yellow', 'purple']; 
    let colorIndex = 0;

    function handleClick() {
        if (divRef.current) {
            divRef.current.style.backgroundColor = colors[colorIndex];
            if(colorIndex==4){
                colorIndex=-1;
            }
            colorIndex++; 
        }
    }

    return (
        <div>
            <h3>Interacting with DOM elements</h3>
            <div
                ref={divRef} 
                style={{ height: '100px', width: '100%', cursor: 'pointer' }}
                onClick={handleClick}
            >
                Click me to change color!
            </div>
        </div>
    );
}

export default ColorChanger;

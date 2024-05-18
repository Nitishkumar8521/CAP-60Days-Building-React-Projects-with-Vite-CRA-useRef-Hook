import { useRef } from "react";

function Custom() {
    const cusRef = useRef(null); 

    function handleSubmit(event) {
        event.preventDefault();
        // Check if the input's value is empty
        if (cusRef.current.value === '') {
            confirm('Input field is empty');
            return;
        }
    }

    return (
        <div>
            <h3>Advanced Form Handling with useRef in React</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    ref={cusRef} 
                />
                <input type="submit" />
            </form>
        </div>
    );
}

export default Custom;




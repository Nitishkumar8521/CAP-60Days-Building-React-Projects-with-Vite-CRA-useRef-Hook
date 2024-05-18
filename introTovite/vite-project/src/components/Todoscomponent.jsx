import { useState } from "react";

function Todoscomponent(){
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({
        title:"",
        isCompleted:false
    });

    function handleSubmit(event){
        event.preventDefault();
        let newTodos = [...todos,todo];
        setTodos(newTodos);
        resetTodo();
    }

    function resetTodo(){
        setTodo({
            title:'',
            isCompleted:false
        })
    }

    function handleChange(event){
       const {type,name} = event.target;
       let value=type==='checkbox'?event.target.checked:type==='number'?Number(event.target.value):event.target.value;
       let newTodo={
        ...todo,
        [name]:value
       }
       setTodo(newTodo);
    }

    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='title' placeholder="Enter task" 
                onChange={handleChange} value={todo.title} />
                <br />
                <label htmlFor="">IsCompleted</label>
                <input checked={todo.isCompleted} onChange={handleChange} name="isCompleted" type="checkbox" />
                <br />
                <input type="submit" />
            </form>
            <dir>
                {todos.length<=0?<p>List is empty</p>:
                <ol>
                {todos.map((ele,index)=>(
                    <li key={index}>{ele.title} {" "}
                    {ele.isCompleted?'Completed':'Pending'}</li>
                ))}
                </ol>}
            </dir>
        </div>
    )
}

export default Todoscomponent;
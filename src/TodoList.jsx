
import { useState } from "react";



export default function TodoList() {

const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState('');


function handleChange(event) {
    //Document typing from user
    setInputValue(event.target.value);
    
}

function handleSubmit(event) {
    event.preventDefault();
    setTodos([...todos, inputValue])
    setInputValue('');
}

//Handle Deletion of Array
const handleDelete = (index) => {

const newTodos = [...todos];
newTodos.splice(index, 1);
setTodos(newTodos);
}



return (

    <div>

        <h1>Robert's To do List</h1>
        <form>
        <input type="text" value= {inputValue} onChange={handleChange}/>
        <button onClick={handleSubmit}>Add to do Button</button>
        </form>
        <ul>
            {todos.map((todo) => (
                <li key={todo}>{todo}
                <button onClick={handleDelete}>Delete</button>
                </li>

            )
        )}
        </ul>



    </div>

);

}
import { useState } from "react"

export default function Todo(props) {
    const {todo, updateTodo, removeTodo} = props
    const [isChecked, setChecked] = useState(todo.done)
    const [task, setTask] = useState(todo.task)
    const handleChange = () => {
        setChecked(!isChecked)
        updateTodo(todo.id)
    }
    return (
        <div className="border my-2 p-2 d-flex justify-content-between align-items-center">
           <div className="d-flex justify-content-between align-items-center">
               <button 
                    className="btn btn-danger me-3" 
                    onClick={() => removeTodo(todo.id)}
                > - </button>
           <div 
                className={isChecked ? " text-decoration-line-through" : ""}
            >
                {todo.task}  
            </div>
           </div>
           <input 
                type="checkbox" 
                style={{transform: 'scale(2)'}}
                checked={isChecked}
                onChange={handleChange}
            />
        </div>
    )
}
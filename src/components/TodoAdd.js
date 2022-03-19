import { useRef, useState } from "react"


export default function TodoAdd(props) {
    const [task, setTask] = useState('')
    const inputRef = useRef()
    const handleAddTodo = (e) => {
        props.addTodo(task)
        setTask('')
        inputRef.current.focus()
    }
    const handleChange = (e) => {
        setTask(e.target.value)
    }
    return (
        <div className="border m-2 p-2 d-flex justify-content-between align-items-center">
            <input 
                ref={inputRef}
                type="text" 
                className="w-100 me-3 p-1 px-3 rounded-pill"
                value={task} 
                onChange={handleChange}
            />
            <button 
                className="btn btn-info"
                onClick={handleAddTodo}
            > + </button>
        </div>
    )
}
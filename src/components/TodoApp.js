import { useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoStatus from "./TodoStatus";

const initialTodos = [
    {id: 1, task: 'Faire le plein', done: false},
    {id: 2, task: 'Faire courses', done: true},
    {id: 3, task: 'Laver le linge sale', done: false},
]

export default function TodoApp(props) {
    let [todos, setTodos] = useState(initialTodos)
    const sort = (todos) => todos.sort((t1, t2) => t1.done - t2.done)
    const uuid = () => todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1 

    const updateTodo = (id) => {
        const index = todos.findIndex(t => id === t.id)
        todos[index].done = !todos[index].done
        todos = [...todos]
        setTodos(sort(todos))
        console.log(id)
    }
    
    const addTodo = (task) => {
        const todo = {
            id: uuid(),
            task,
            done: false
        }
        todos = [todo, ...todos]
        setTodos(todos)
    }
    const removeTodo = (id) => {
        const index = todos.findIndex(t => id === t.id)
        todos.splice(index, 1)
        todos = [...todos]
        setTodos(todos)
    }
    return (
       <>
        <div className="container-fluid p-2 ">
          <div className="m-3 border p-2">
            <TodoAdd addTodo={addTodo} />
            <TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} />
            <TodoStatus todos={todos} />
          </div>
        </div>
        <hr />
        <div className="container-fluid p-3">
            <pre>{JSON.stringify(todos, null, 3)}</pre>
        </div>
       </>

    )
}
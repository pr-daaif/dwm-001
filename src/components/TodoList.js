import Todo from "./Todo";

export default function TodoList(props) {
    const {todos, updateTodo, removeTodo} = props
    return (
        <div className="border m-2 p-2">
            {
                todos.map(t => (
                    <Todo 
                        key={t.id} 
                        todo={t}
                        updateTodo={updateTodo}
                        removeTodo={removeTodo}
                    />
                ) )
            }
        </div>
    )
}
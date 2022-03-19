

export default function TodoStatus(props) {
    return (
        <div className="border m-2 p-2 text-center">
            Nombre de taches : (
               <span className="badge bg-success"> {props.todos.length}</span>
                ) dont 
            (
            <span  className="badge bg-success">{props.todos.filter(t => t.done).length}</span>
                ) réalisée(s)
        </div>
    )
}
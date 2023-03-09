export const TodoItem = ({ todo, handleDeleteTodo }) => {
    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{ todo.description }</span>
            <button 
                className="btn btn-danger"
                onClick={ () => handleDeleteTodo(todo.id) }
            >Borrar</button>
        </li>
    );
};
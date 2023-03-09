export const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between">
            <span
                role="button"
                className={`align-self-center ${ todo.done ? 'text-decoration-line-through': '' }`} 
                onClick={ () => handleToggleTodo( todo.id ) }
            >{ todo.description }</span>
            <button 
                className="btn btn-danger"
                onClick={ () => handleDeleteTodo(todo.id) }
            >Borrar</button>
        </li>
    );
};
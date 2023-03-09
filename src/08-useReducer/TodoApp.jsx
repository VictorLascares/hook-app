import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
    {
        id: `_${Math.random().toString(36).substring(2, 9)}`,
        description: 'Recolectar la gema del alma',
        done: false
    },
    {
        id: `_${Math.random().toString(36).substring(2, 9)}`,
        description: 'Recolectar la gema del tiempo',
        done: false
    },
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos } />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd handleNewTodo={ handleNewTodo } /> 
                </div>
            </div>
        </>
    );
};
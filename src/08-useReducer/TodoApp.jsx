import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

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
    const [todos, dispatch] = useReducer( todoReducer, initialState);

    return (
        <>
            <h1>TodoApp</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    );
};
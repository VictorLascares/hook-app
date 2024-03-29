import { todoReducer } from "../../08-useReducer/todoReducer";

describe('Probando el todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('Debe de regresar el estado inicial', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState);
    });

    test('Debe de agregar un todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer(initialState, action);
        expect(newState).toHaveLength(2);
        expect(newState).toContain(action.payload);
    });

    test('Debe de eliminar un todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 2
        }

        const newState = todoReducer(initialState, action);
        expect(newState).toHaveLength(1);
    });

    test('Debe de completar un todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };

        const newState = todoReducer(initialState, action);
        const done = newState.map(todo => todo.id === action.payload);
        expect(done).toBeTruthy();
    });
});
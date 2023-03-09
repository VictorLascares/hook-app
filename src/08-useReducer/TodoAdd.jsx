import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ handleNewTodo }) => {

    const { description, handleChange, onResetForm } = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if ( description.length <= 1 ) return;

        const newTodo = {
            id: `_${Math.random().toString(36).substring(2, 9)}`,
            done: false,
            description
        }

        handleNewTodo(newTodo);
        onResetForm()
    }

    return (
        <form onSubmit={ handleSubmit } >
            <input
                type="text"
                placeholder="Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={handleChange}
            />

            <button
                type="submit"
                className="btn btn-primary mt-2"
            >
                Agregar
            </button>
        </form>
    );
};
import { useRef } from "react";

export const FocusScreen = () => {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                ref={ inputRef } 
                type="text" 
                placeholder="Ingresa tu nombre"
                className="form-control"
            />

            <button
                onClick={ handleClick }
                className="btn btn-primary mt-2" 
            >
                Set Focus
            </button>
        </>
    );
};
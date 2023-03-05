import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    const { counter } = useCounter();

    return (
        <>
            <h1>Counter With Custom Hook: {counter}</h1>
            <hr />

            <button 
                className="btn btn-primary" 
            >+1</button>
            <button
                className="btn btn-danger" 
            >Reset</button>
            <button
                className="btn btn-primary" 
            >-1</button>
        </>
    );
};
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
    const { user, setUser } = useContext( UserContext );

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>

            <button
                className="btn btn-outline-primary" 
                onClick={ () => setUser({ id: 121231, name: 'Victor', email: 'victor@correo.com'}) }
            >
                Set user
            </button>
        </>
    );
};
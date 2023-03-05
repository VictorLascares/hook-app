import { useEffect, useState } from "react";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'MaquinaAsesina1',
        email: 'maquinaAsesina@correo.com'
    });

    const { username, email } = formState;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        console.log("useEffect called!!");
    }, []);

    useEffect(() => {
        console.log("formState changed!!");
    }, [formState]);

    useEffect(() => {
        console.log("email chainged!!");
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="email@example.com"
                name="email"
                value={email}
                onChange={handleChange}
            />
        </>
    );
};
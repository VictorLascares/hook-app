import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
    const { formState, handleChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
            <h1>Form With Custom Hook</h1>
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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
            />
        </>
    );
};
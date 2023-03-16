import { UserContext } from "./UserContext";

const user = {
    id: 'adsjasdkl121',
    name: "Victor Lascares",
    email: "victor@correo.com"
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: 'Mundo', user }}>
            { children }
        </UserContext.Provider>
    );
};
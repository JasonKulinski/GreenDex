import { useState, createContext } from 'react'

const UserContext = createContext()

const UserProvider = (props) => {
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState("test@gmail.com")

    return (
        <UserContext.Provider value={{ username, setUsername, email, setEmail }}>
            {props.children}
        </UserContext.Provider>
    );
}
export { UserContext, UserProvider }
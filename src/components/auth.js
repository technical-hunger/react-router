import { Children, createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null); 

    const login = (user) => {
        setUser(user);
    }

    const logout = () => {
        setUser(null)
    }
    const isLogedin = () => {
        return user != null;
    }

    return (
    <AuthContext.Provider  value={{user, login, logout, isLogedin}}>
        {children}    
    </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext);
}
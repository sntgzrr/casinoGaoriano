import { createContext, useContext, useEffect, useState } from "react";
import { isAuthenticated } from "../utils/api/Auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    const getAuthenticated = async () => {
        try {
            const authStatus = await isAuthenticated();
            setAuthenticated(authStatus);
        } catch {
            setAuthenticated(false);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAuthenticated();
    }, [])
    return (
        <AuthContext.Provider value={{authenticated, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

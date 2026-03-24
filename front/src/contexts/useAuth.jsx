import { createContext, useContext, useEffect, useState } from "react";
import { isAuthenticated, isAdmin } from "../utils/services/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState();

    const getAuthenticated = async () => {
        try {
            const authStatus = await isAuthenticated();
            setAuthenticated(authStatus.is_authenticated);
            setUser(authStatus.user);
        } catch {
            setAuthenticated(false);
        } finally {
            setLoading(false)
        }
    }

    const getAdmin = async () => {
        try {
            const adminStatus = await isAdmin();
            setAdmin(adminStatus);
        } catch {
            setAdmin(false);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAuthenticated();
        getAdmin();
    }, [])
    return (
        <AuthContext.Provider value={{authenticated, admin, loading, user}}>
            {children}
        </AuthContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

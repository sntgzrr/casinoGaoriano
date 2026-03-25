import { createContext, useContext, useEffect, useState } from "react";
import { isAuthenticated, isAdmin } from "../utils/services/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const initAuth = async () => {
            try {
                const authStatus = await isAuthenticated();

                if (!authStatus.is_authenticated) {
                    setAuthenticated(false);
                    setAdmin(false);
                    setUser(null);
                    return;
                }

                setAuthenticated(true);
                setUser(authStatus.user);
                if (authStatus.user.admin) {
                    const adminStatus = await isAdmin();
                    setAdmin(adminStatus);
                } else {
                    setAdmin(false);
                }

            } catch (error) {
                console.error("Auth init error:", error);
                setAuthenticated(false);
                setAdmin(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initAuth();
    }, []);

    return (
        <AuthContext.Provider value={{
            authenticated,
            admin,
            loading,
            user
        }}>
            {children}
        </AuthContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

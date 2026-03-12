import { useAuth } from "../contexts/useAuth"
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { authenticated, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return null;
    }
    if (authenticated) {
        return children;
    } else {
        navigate("/");
        return null;
    }
}

export default PrivateRoute;

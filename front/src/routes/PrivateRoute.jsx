import { useAuth } from "../contexts/useAuth"
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { authenticated, admin, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return null;
    }
    if (authenticated && admin) {
        return children;
    } else {
        navigate("/");
        return null;
    }
}

export default PrivateRoute;

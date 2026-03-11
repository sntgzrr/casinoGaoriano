import { useAuth } from "../contexts/useAuth"
import { useNavigate } from "react-router-dom";

function PrivateRoute({ children }) {
    const { authenticated, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return false;
    }
    if (authenticated) {
        return children;
    } else {
        navigate("/");
    }
}

export default PrivateRoute;

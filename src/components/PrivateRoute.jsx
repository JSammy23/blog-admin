import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";  // adjust the path accordingly

const PrivateRoute = () => {
    let auth = useAuth();

    return (
        auth ? <Outlet/> : <Navigate to="/login" />
    )
}

export default PrivateRoute;
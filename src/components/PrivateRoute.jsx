import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth"; 

const PrivateRoute = () => {
    let auth = useAuth();

    return (
        auth ? <Outlet/> : <Navigate to="/" />
    )
}

export default PrivateRoute;
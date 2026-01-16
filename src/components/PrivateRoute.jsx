import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/authContext";


export default function PrivateRoute() {

    const {usuario, loading} = useAuth();

    if(loading) return <div>Cargando...</div>;
    if(!usuario) return <Navigate to="/login" replace/>


  return <Outlet/>
}


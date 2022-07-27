import { useLocation, Navigate, Outlet } from "react-router-dom"

const RequireAuth = () => {
    const location = useLocation()

    return (
        <Outlet />
    )
}
export default RequireAuth
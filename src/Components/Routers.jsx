import { Route, Routes } from "react-router-dom"
import { Home } from "./Home/Home"
import { Login } from "./Login/Login"
import { Register } from "./Login/Register"

const PrivateRoute = ({isAuthenticated,children}) =>{
    return isAuthenticated ? children : <Navigate to="/login"/>;
}


export const Routers = () => {
    //<Route path="/book/:id" element={<ClassDetails/>}/>
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>} />
            </Routes>
        </>
    )
}
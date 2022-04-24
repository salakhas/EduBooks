import { Home } from "./Home/Home"
import { Login } from "./Login/Login"
import { Navber } from "./Navbar/Navbar"

const PrivateRoute = ({isAuthenticated,children}) =>{
    return isAuthenticated ? children : <Navigate to="/login"/>;
}


export const Routers = () => {
    //<Route path="/book/:id" element={<ClassDetails/>}/>
    return (
        <>
        <Navber/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/book/:id" element={<BookDetails/>}/>
            </Routes>
        </>
    )
}

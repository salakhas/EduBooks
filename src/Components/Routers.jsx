import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "../Components/Login/Login";
// import { Register } from "../Components/Login/Login";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
export const Routers = () => {
  //   const navigate = useNavigate();
  //   const PrivateRoute = ({ isAuthenticated, children }) => {
  //     return isAuthenticated ? children : navigate("/login");
  //   };
  //   useEffect(() => {
  //     PrivateRoute();
  //   }, []);
  //<Route path="/book/:id" element={<ClassDetails/>}/>
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

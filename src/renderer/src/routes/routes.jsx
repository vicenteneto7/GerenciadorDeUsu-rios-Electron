import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login/index.jsx";
import { Cadastro } from "../pages/Cadastro/index.jsx";
import { Home } from "../pages/Home/index.jsx";
import PrivateRoute from "./private-routes.jsx";


const MyRouter = () => {

  
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/cadastrar-usuario" element={<Cadastro />} />
      <Route exact path="/" element={<PrivateRoute component={Home} />} />
    </Routes>
  );
};

export default MyRouter;
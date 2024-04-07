import React from "react";
import ReactDOM from "react-dom/client";

import GlobalStyles from "./styles/globalStyles.js";
//import { Cadastro } from './pages/Cadastro/index.jsx'

import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./routes/routes.jsx";
import { UserProvider } from "./hooks/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <MyRouter />
        <ToastContainer autoClose={2000} theme="colored" />
      </UserProvider>
    </BrowserRouter>
    <GlobalStyles />
  </React.StrictMode>
);

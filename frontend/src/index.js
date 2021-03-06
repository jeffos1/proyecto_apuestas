import React from "react";
import { render } from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Paginas
import App from "./App";
import Login from "./routes/Login";
import Registro from "./routes/Registro";
import Saldo from "./routes/Saldo";
import Finalizados from "./routes/Finalizados";
import Dashboard from "./routes/DashboardHome";
import { Historial } from "./routes/Historial";

//CSS
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import "./index.css";
import "./components/Navbar.css";

import "./components/Game.css";
import "./routes/Saldo.css";

const rootElement = document.getElementById("root");

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="registro" element={<Registro />} />
      <Route path="saldo" element={<Saldo />} />
      <Route path="finalizados" element={<Finalizados />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="historial" element={<Historial />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

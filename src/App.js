import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import User from "./Components/User/User";
import { Userstorage } from "./UserContext";

function App() {
  
  return (
      <BrowserRouter>
        <Userstorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Login/*" element={<Login />} /> 
            <Route path="conta/*" element={<ProtectedRoute> <User /> </ProtectedRoute>}/>    
          </Routes>
          <Footer />
        </Userstorage>
      </BrowserRouter>
  );
}

export default App;

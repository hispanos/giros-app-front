import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Register from "../components/login/Register";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
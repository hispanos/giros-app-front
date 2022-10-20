import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Login from "../components/login/Login";
import Home from "../components/home/Home";
import Register from "../components/login/Register";
import Transfer from "../components/transfer/Transfer";
import NewTransfer from "../components/transfer/NewTransfer";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                    <Route element={<Home />}>
                        <Route path="home"  element={<Transfer />} />
                        <Route path="new"  element={<NewTransfer />} />
                    </Route>
                <Route path="register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
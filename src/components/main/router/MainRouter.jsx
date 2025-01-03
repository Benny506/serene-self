import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "../screens/welcome/Welcome";
import Home from "../screens/home/Home";


export default function MainRouter(){
    return(
        <Routes>
            <Route 
                path="*"
                element={
                    <Welcome />
                }
            />
            <Route 
                path="/home"
                element={
                    <Home />
                }
            />            
        </Routes>
    )
}
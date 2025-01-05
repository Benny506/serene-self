import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "../screens/welcome/Welcome";
import Home from "../screens/home/Home";
import Settings from "../screens/settings/Settings";


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
                path="/dashboard"
                element={
                    <Home />
                }
            /> 
            <Route 
                path="/settings"
                element={
                    <Settings />
                }
            />                        
        </Routes>
    )
}
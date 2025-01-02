import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AuthCarousel from '../auxiliary/AuthCarousel'
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import ScrollToTop from "../../customScroll/ScrollToTop";
import ConfirmEmail from "../screens/ConfirmEmail";
import ResetPassword from "../screens/ResetPassword";


export default function AuthRouter(){

    const { pathname } = useLocation()

    return (
        <ScrollToTop
            scrollToTopCondition={pathname}
        >
            <div className="d-flex align-items-center justify-content-between">

                <div className="col-lg-6 col-md-12 col-12 px-lg-5 px-md-3 px-2 py-lg-0 py-3 py-2">
                    <Routes>
                        <Route 
                            path="/"
                            element={
                                <SignUp />
                            }
                        />
                        <Route 
                            path="/login"
                            element={
                                <Login />
                            }
                        />
                        <Route 
                            path="/confirm-email"
                            element={
                                <ConfirmEmail />
                            }
                        />
                        <Route 
                            path="/reset-password"
                            element={
                                <ResetPassword />
                            }
                        />                                                                    
                    </Routes>
                </div>

                <div className="col-lg-6 d-lg-block d-md-none d-none">
                    <AuthCarousel />
                </div>
            </div>
        </ScrollToTop>
    )
}
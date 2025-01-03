import React from "react";
import { IoMdMenu } from "react-icons/io";
import './css/navigation.css'
import logoIcon from '../../../assets/images/logos/logo-icon-only.png'


export default function Navigation(){
    return (
        <div className="navigation-container px-3 py-2 d-flex align-items-center justify-content-between">
            <div className="col-lg-2">
                <IoMdMenu color="rgba(0, 0, 0, 0.47)" size={30} className="clcikable" />
            </div>
            <div className="col-lg-4 d-lg-flex d-md-none d-none align-items-center justify-content-center">
                <h1 className="m-0 p-0 text-center font-family-Sacramento txt-000 fw-700 txt-30">
                    Your thoughts ?
                </h1>
            </div>
            <div className="col-lg-2 col-md-4 col-4 d-flex align-items-center justify-content-end">
                <img src={logoIcon} className="col-lg-3 col-md-3 col-3" />
            </div>
        </div>
    )
}
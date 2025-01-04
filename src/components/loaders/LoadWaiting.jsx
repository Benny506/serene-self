import React from "react";
import logoIcon from '../../assets/images/logos/logo-green-bg.png'


export default function LoadWaiting(){
    return (
        <div 
            style={{
                minHeight: '100vh'
            }}
            className="d-flex bg-3A5B22 align-items-center justify-content-center"
        >
            <img src={logoIcon} />
        </div>
    )
}
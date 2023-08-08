import React from "react";
import "./Navbarcomp.css";

function Navbarcomp(){

    return(
        <div className="Navbar">
            <div className="navbartitle">Notes App</div>
            <div className="links">
            <a href="/">Home</a>
            <a href="/notes">Notes</a>
            <a href="/login">Login</a>

            </div>
            
        </div>
    )

}

export default Navbarcomp;
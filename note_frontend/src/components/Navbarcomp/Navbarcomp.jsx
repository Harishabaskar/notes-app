import React from "react";
import "./Navbarcomp.css";
import { useState } from "react";

function Navbarcomp(){
    const[logged , setLogged] = useState(sessionStorage.getItem("loggedIn") ? true : false) 

    const loginHandler = () => {
        if(logged){
            sessionStorage.removeItem("loggedIn")
            sessionStorage.removeItem("user")
            window.location.href = "/"
        }
        else{
            window.location.href = "/login"
        }
    }

    return(
        <div className="Navbar">
            <div className="navbartitle">Notes App</div>
            <div className="links">
            <a href="/">Home</a>
            <a href="/notes">Notes</a>
            <button onClick={loginHandler} >{ logged ? "Logout" : "Login"}</button>

            </div>
            
        </div>
    )

}

export default Navbarcomp;
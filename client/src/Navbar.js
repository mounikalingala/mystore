import React from "react";
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <ul className="navbar">
                <Link to="/register"><li className="list">Register</li></Link>
                <Link to="/login"><li className="list">Login</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
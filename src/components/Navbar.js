import React from 'react';
import { Link,Routes,Route } from "react-router-dom"
import OpenDashboard from './OpenDashboard'; 
import Home from './Home';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="brand">
                <h2>LaurelReview</h2>
            </div>
            <div className="navbarTiles">
                <div>
                    <Link to="/home">
                        <span> Home</span>
                    </Link>
                </div>
                <div>
                    <Link to="/"><span>Users</span></Link>
                </div>
                <div>
                    <Link to="/subs"><span>Subscripions</span></Link>
                </div>
                <div>
                    <Link to="/admin"><span>Admin Login</span></Link>
                </div>
            </div>

           
        </div>
    )
}

export default Navbar
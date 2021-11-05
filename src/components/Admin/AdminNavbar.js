import React from 'react';
import { Link } from "react-router-dom"

const AdminNavbar = () => {
    return (
        <div className="adminnavbar">
            <div className="brand">
                <h2>LaurelReview</h2>
            </div>
            <div className="adminnavbarTiles">
                <div>
                    <Link to="/acount">
                       <span> Account</span>
                    </Link>
                </div>
                <div>
                    <Link to="/users"><span>Users</span></Link>
                </div>
                <div>
                    <Link to="/dash"><span>home</span></Link>
                </div>
                <div>
                    <Link to="/logout"><span>logout</span></Link>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar
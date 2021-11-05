import React from 'react';
import { Routes, Route, Router, Outlet } from 'react-router';
import AdminNavbar from './AdminNavbar';
import SideNav from './SideNav';
import Users from './Users';
import Content from './Content';

const AdminDashboard = () => {
    return (
        <div>
            <AdminNavbar />
            <div className="main">
                <div className="sidebar">
                    <SideNav />
                </div>
                <div className="maincontent">
                    <Outlet />

                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
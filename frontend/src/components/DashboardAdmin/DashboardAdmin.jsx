import React from 'react';
import './DashboardAdmin.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <h2 className="sidebar-title">Admin Dashboard</h2>
                <ul className="sidebar-menu">
                    <li className="sidebar-item">
                        <Link to="/admin/analytics" className="sidebar-link">Analytics</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/admin/users" className="sidebar-link">Users</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/admin/content" className="sidebar-link">Content Management</Link>
                    </li>
                    <li className="sidebar-item">
                        <Link to="/admin/settings" className="sidebar-link">Settings</Link>
                    </li>
                </ul>
            </aside>
            <main className="main-content">
                <h1 className="main-title">Welcome, Admin!</h1>
                <p className="main-description">
                    This is your admin dashboard. Use the sidebar to navigate to different sections.
                </p>
            </main>
        </div>
    );
};

export default Dashboard;
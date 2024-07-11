import React from "react";
import { useAuth } from "../contexts/authContext.js";
import AdminDashboard from "../components/dashboard/AdminDashboard.js";
import MemberDashboard from "../components/dashboard/MemberDashboard.js";

const Dashboard = () => {
    const { currentUser } = useAuth();

    // Determine which dashboard to render based on user role
    const isAdmin = currentUser && currentUser.role === 'admin';

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            {isAdmin ? <AdminDashboard /> : <MemberDashboard />}
        </div>
    );
}

export default Dashboard;

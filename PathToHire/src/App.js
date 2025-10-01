import React, { lazy, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//importing pages
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const VerifyAccount = lazy(() => import("./pages/VerifyAccount"));

const App = () => {
    useEffect(() => {

    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/verify-account" element={<VerifyAccount />} />
                {/* Place new routes over this */}
                {/* <Route path="/app/*" element={<Layout />} /> */}
                 <Route
                path="*"
                element={
                <Navigate to="/login" replace />
                }
                />
            </Routes>
        </Router>
    );
};

export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login/login";
import Features from "./components/Features/features";
import Solutions from "./components/solutions";
import Signup from "./components/Signup/Signup";
import NotFound from "./components/Not-found/NotFound";
import VerifyEmail from "./components/verify-email/VerifyEmail";
import { useSelector } from "react-redux";
import ForgotPassword from "./components/Forgot-password/ForgetPassword";


function App() {
  const { user } = useSelector((state) => state.auth); 
  return (
   
      <Router>
        <div>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/features' element={<Features />} />
          <Route exact path='/solution' element={<Solutions />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/Signup' element={<Signup/>} />
          <Route
            path="/users/:userId/verify/:token"
            element={!user ? <VerifyEmail /> : <Navigate to="/" />} 
          />
           <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;

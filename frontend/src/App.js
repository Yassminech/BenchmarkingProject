import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/navbar";
import Login from "./components/Login/login";
import Features from "./components/features";
import Solutions from "./components/solutions";
import Signup from "./components/Signup/Signup";



function App() {
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
        </Routes>
        </div>
      </Router>
  );
}

export default App;

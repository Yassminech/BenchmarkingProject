import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      if (res.data === "exist") {
        navigate("/home", { state: { id: email } });
      } else if (res.data === "notexist") {
        alert("User does not exist. Please sign up.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred while logging in. Please try again.");
    }
  }

  return (
    <div className="login">
      <h1>Login</h1>
      <form>
       <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" 
        />
        
        
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={submit}>
          Login
        </button>
      </form>
      <div className="remember-forgot">
        <label><input type="checkbox"/>Remember me</label>
      </div>
      <div className="forgot-password">Lost Password? <span>Click Here!</span></div> <p>OR</p> <Link to="/signup">Signup Page</Link>
    </div>
  );
}

export default Login;
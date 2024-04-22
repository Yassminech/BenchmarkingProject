import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './Signup.css';
import { useDispatch} from "react-redux";
import { registerUser } from "../../redux/apiCalls/authApiCall";


function Login() {
    const dispatch = useDispatch();
    const history = useNavigate();
    
    
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState(''); 
    const [password, setPassword] = useState('');
    
    const submit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/signup", { email, fullname, password });
            
            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                history("/home", { state: { id: email } });
            }
        } catch (error) {
            console.error("Error: ", error);
            alert("Wrong details");
        }
        dispatch(registerUser({  email, fullname, password }))
        
    };

    return (
        <div className="login">
            <h1>Signup</h1>
            <form onSubmit={submit}>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder="Fullname" /> 
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
            <br/>
            <p>OR</p>
            
            <Link to="/login">Login Page</Link>
        </div>
    );
}

export default Login;
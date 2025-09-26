import { useState } from 'react';
import '../styles/login.css'
import React from 'react';
import { useEffect } from 'react';
import { users } from '../staticData/staticData';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../context/Authentication';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const {login} = useAuth()

    useEffect(() => {
    console.log('Login Component rendered');
    }, []);

    const handleLogin = () => {
        console.log(' Login attempt with:', { email, password });
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
        login(user);
        console.log('Login successful..',user.name);
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        navigate('/book-store');
        } else {
        console.log(' Login failed');
        setError('Invalid email or password');
        }
    };

    return(
    <div className='main'>
        <h3>Books</h3>
        <div className="form">
            <h3>Login Here</h3>
            <label>Username:</label>
            <input 
              type="email" 
              placeholder="Email"
              value={email} 
              autoFocus 
              onChange={e=>{
                setEmail(e.target.value);
            } }/>
            
            <label>Password:</label>
            <input 
              type="password" 
              placeholder="password"
              value={password} 
              onChange={e=>{
                setPassword(e.target.value);
            }} />
            <button className="register-button"onClick={handleLogin}>Login</button>
            {error && <p className="error-text">{error}</p>}
            <p>Don't have an account <a href="/">Sign Up</a></p>
        </div>
    </div>
    )
}
export default Login;


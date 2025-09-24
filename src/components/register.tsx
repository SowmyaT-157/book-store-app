import './login.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {users,User} from './staticData';
export const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log('user register register:', { firstName, lastName, email });
    if (!firstName || !lastName || !email || !password|| !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      setError('Email already exists');
      console.log(' Registration failed: email exists');
      return;
    }
    const newUser: User = {
    id: (users.length + 1).toString(),
    name: `${firstName} ${lastName}`,
    email,
    password,
    };
    users.push(newUser);
    console.log('Registration successful:', newUser);
    navigate('/login');
  };

   return(
    <div className='main'>
        <h3>Books</h3>
        <div className='form'>
            <h3>Sign Up</h3>
            <label>Name:</label>
            <div className='name-container'>
              <input className="first-name"type="text" placeholder="first name" value={firstName} autoFocus onChange={e => setFirstName(e.target.value)}/>
              {/* <label>Last Nmae:</label> */}
              <input className="last-name"type="text" placeholder="last name"value={lastName}onChange={e=>setLastName(e.target.value)}/>
            </div>
            <label>Email:</label>
            <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <label>Password:</label>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
            <label>Confirm Password:</label>
            <input type="password" placeholder="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            <button className="register-button"onClick={handleRegister}>Sign Up</button>
             {error && <p className="error-text">{error}</p>}
            <p>Already have an account <a href="/login">SignIn</a></p>
             
        </div>
    </div>
   )
}
export default SignUp;
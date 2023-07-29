import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './index.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profession, setProfession] = useState('React');
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();
 

    const handleSignup = (event) => {
        event.preventDefault();
        
        // Validate if the fields are not empty
        if (!name || !email || !password || !phoneNumber) {
            setErrorMessage('Please fill all the fields.');
            return;
        }
       

        // Save the user details in local storage
        const user = {
            name,
            email,
            password,
            phoneNumber,
            profession,
        };
        localStorage.setItem('user', JSON.stringify(user));
        // Redirect to the home page after successful signup
        navigate('/login')
    };
console.log(name,password)

    return (
        <div className='Register-form-container'>
            <form autoComplete="off" className="r-form" onSubmit={handleSignup}>
                <h4 className='loginPage-title'>Register Form</h4>
                <label htmlFor='email'>UserName</label>
                <div className='input-card'>
                    <input id='email' type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                </div>&nbsp; <br />
                <label htmlFor='email'>Email</label>
                <div className='input-card'>
                    <input id='email' type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </div>&nbsp; <br />
                <label htmlFor='Mailpassword'>password</label>
                <div className='input-card'>
                    <input id='Mailpassword' type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                </div>&nbsp; <br />
                <label htmlFor='Mailpassword'>Phone Number</label>
                <div className='input-card'>
                    <input id='Mailpassword' type="password" value={phoneNumber} placeholder='password' onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>&nbsp; <br />
                <label htmlFor='Mailpassword'>Profession</label>
                <div className='input-select'>
                    <select name="Profession" id="Profession"  onChange={(e) => setProfession(e.target.value)}>
                        <option value="React">React Developer</option>
                        <option value="backend">Backend Deaveloper</option>
                        <option value="mern">Mern stack Deaveloper</option>
                        <option value="Pyethon">Python Developer</option>
                    </select>
                </div>&nbsp; <br />
                <button type='submit' className='login-btn'>Register</button>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </form>
        </div>
    );
};

export default Signup;

import React, { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'
import { useNavigate, Redirect } from "react-router-dom"
import './index.css'


const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrMessage] = useState('')
    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        // Fetch user details from local storage
        const storedUser = localStorage.getItem('user');
        console.log(storedUser, email,password)
        if (storedUser) {
            const user = JSON.parse(storedUser);
            console.log(user.name)
            // Check if the entered email and password match the stored credentials
            if (user.email === email && user.password === password) {
                // Redirect to the home page after successful login
                navigate('/');
            } else {
                setErrMessage('Invalid email or password.');
            }
        } else {
            setErrMessage('User not found. Please sign up first.');
        }
       

    };
   



    return (
        <div className='Register-form-container'>
            <form autoComplete="off" className="r-form" onSubmit={handleLogin}>
                <h4 className='loginPage-title'>Loign Form</h4>
                {/* <label htmlFor='email'>UserName</label>
                <div className='input-card'>
                    <input id='email' type="text" value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                </div>&nbsp; <br />  */}
                <label htmlFor='email'>Email</label>
                <div className='input-card'>
                    <input id='email' type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                </div>&nbsp; <br />
                <label htmlFor='Mailpassword'>password</label>
                <div className='input-card'>
                    <input id='Mailpassword' type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                </div>&nbsp; <br />
                <button type='submit' className='login-btn'>Register</button>
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </form>
        </div>
    )
}
export default Login
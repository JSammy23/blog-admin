import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import './LoginPage.Styles.css'; 
import { loginUser } from "../../../api";


const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        if (e.target.value !== '') {
            e.target.parentElement.classList.add('has-value');
        } else {
            e.target.parentElement.classList.remove('has-value');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser({ username, password });
            console.log(data.message);
            navigate('/home');
            // setTimeout(() => navigate('/home'), 1000);
        } catch (err) {
            setError("Failed to log in.");
        }
    };

  return (
    <div >
        <div className="login-box">
            <form onSubmit={handleSubmit} >
                <div className="user-box">
                    <input type="username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} onBlur={handleInputChange} onFocus={handleInputChange} />
                    <label htmlFor="username" >Username</label>
                </div>
                <div className="user-box">
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={handleInputChange} onFocus={handleInputChange} />
                    <label htmlFor="password" >Password</label>
                </div>
                <div className="info">
                    <p>Don't have an account? Click sign up below.</p>
                </div>
                <div className="controls">
                    <button className="login-button" type="submit">Log In</button>
                    <Link to='/signup' className="sign-up-button" >Sign Up</Link>
                </div>
                {error && <div className='error'>{error}</div>}
            </form>
        </div>
    </div>
  )
}

export default LoginPage
import React from 'react';
import './CSS/loginSignup.css';

const LoginSignup = () => {
    return (
        <div className="LoginSignup">
            <div className="loginSignup-container">
                <h1>Sign Up</h1>
                <div className="loginSignup-fields">
                    <input type="text" name="" placeholder='Your name' />
                    <input type="email" name="" placeholder='Email password' />
                    <input type="password" name="" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className="loginSignup-login">Already have an account? <span>
                    login</span></p>
                    <div className="loginSignup-agree">
                        <input type="checkbox" name="" id="" />
                        <p>By continuing , i agree to the terms of use & privacy policy</p>
                    </div>
            </div>
        </div>
    )
}

export default LoginSignup;
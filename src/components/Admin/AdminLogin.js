import React, { useEffect, useState, useRef } from 'react';
import { Route, Redirect,useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const users = [
        {
            user: "admin",
            password: "admin@123"

        },
        {
            user: "jeevan",
            password: "jeevan@123"

        },

    ]
    const emailRef = useRef({})
    // const passwordRef = useRef()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = emailRef.current['email'].value
        const password = emailRef.current['password'].value
        console.log(email, password)
        for (var element in users) {
            // console.log(element)
            if (users[element].user === email && users[element].password === password) {
                // console.log("yes")
                sessionStorage.setItem("loggedIn", true)
                // props.userLogged(true)
                
                navigate('/adminDash')
               
            } else {
                sessionStorage.setItem("loggedIn", false)
                
            }
        }
    }
    return (
        
                    <form>
                        <div className="Loginform">
                            <div className="inputs">
                                <div> <label htmlFor="username">Username</label></div>
                                <div><input type="text"
                                    //   onChange={(e)=>setEmail(emailref.current.value)}
                                    ref={el => emailRef.current['email'] = el}
                                    //  value={email}  
                                    required /></div>
                            </div>
                            {/* <p>{emailError}</p> */}
                            <div className="inputs">
                                <div> <label htmlFor="password">Password</label></div>
                                <div> <input type="password"
                                    ref={el => emailRef.current['password'] = el}
                                    //  value={password}
                                    // onChange={(e)=>setPassword(passwordRef.current.value)}
                                    required /></div>
                            </div>
                            {/* <p>{passwordError}</p> */}
                            <div className="inputs">
                                <button onClick={handleLogin}>SignIn</button>
                            </div>
                        </div>
                    </form>
    )
}



export default Login
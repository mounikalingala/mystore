import React, { useState, useContext } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom"
import {store} from "./App"

const Login = () => {
    const [token,setToken]=useContext(store)
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const changeHandler = event => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        axios.post('http://localhost:5000/login',data).then(
            res=>setToken(res.data.token)
        ) 
    }
    if(token) {
            return <Navigate to="/myprofile"/>
        }


    return (
        <div>
            <center>
            <form onSubmit={onSubmit}>
                    <h1>Login to Brand Store</h1>
                    <input type="email" name="email" placeholder="Enter Email" onChange={changeHandler } /><br/>
                    <input type="password" name="password" placeholder="Enter Password" onChange={changeHandler} />
                    <br />
                    <input type="submit" value="Login" /><br/>
                </form>
            </center>
        </div>
    )
}

export default Login
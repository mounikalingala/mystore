import React, { useState, useContext } from "react";
import Axios from "axios";
import { useNavigate} from "react-router-dom"
import {store} from "./App"

const Login = () => {
    const navigate=useNavigate()
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
        Axios.post('http://localhost:5000/login',data).then(
            res => setToken( console.log(res.data.token))
        ) 
    }

    if(token) {
            return  navigate("/myprofile")
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
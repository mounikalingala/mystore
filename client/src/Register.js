import React, { useState } from "react";
import Axios from 'axios';

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword:"",
    })

    const changeHandler = event => {
        setData({...data,[event.target.name]:event.target.value})
    }

    const onSubmit = event => {
        event.preventDefault()
        console.log(data)
        Axios.post('http://localhost:5000/register',data).then(
            res=> {alert(res.data);}
        )
        setData({
            data:""
        })

    }

    return (
        <div>
            <center>
                <form onSubmit={onSubmit}>
                    <h1>Register to Brand Store</h1>
                    <input type="text" name="username" placeholder="Enter Username" onChange={changeHandler} /><br/>
                    <input type="email" name="email" placeholder="Enter Email" onChange={changeHandler } /><br/>
                    <input type="password" name="password" placeholder="Enter Password" onChange={changeHandler } /><br/>
                    <input type="password" name="confirmpassword" placeholder="Confirm password" onChange={changeHandler } /><br/>
                    <input type="submit" value="Register" />
                </form>
            </center>
        </div>
    )
}

export default Register
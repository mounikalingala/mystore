import React, { useState, useContext, useEffect } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios";
import {store } from "./App"

const Myprofile = () => {
    const [token, setToken] = useContext(store)
    const [data, setData] = useState(null)

    console.log(setToken)

    useEffect(() => {
        axios.get("http://localhost:5000/myprofile", {
            headers: {
                "x-token":token
            }
        }).then(res=>setData(res.dada)).catch((err)=>console.log(err))
    })

    if (!token) {
        return <Navigate to="/login"/>
    }
    return (
        <div>{
            data&&
            <center>
                Welcome user : {data.username}
            </center>
        }
        </div>
    )
}

export default Myprofile
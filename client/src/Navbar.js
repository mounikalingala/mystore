import React,{useContext,useState} from 'react';
import { Link } from "react-router-dom"
import { store } from './App';

import "./Navbar.css"

const Navbar = () => {
    const [token,setToken] = useContext(store)
    return (
        <div>{!token ?
              <form class="form-inline my-2 my-lg-0">
                <ul>
                    <Link to='/register' ><li>Register</li></Link>
                    <Link to='/login' ><li>Login</li></Link>
                </ul>
                </form>

            
           
            :
            <div></div>
}

        </div>
    )
}

export default Navbar
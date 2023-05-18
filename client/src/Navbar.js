import React,{useContext} from 'react';
import { Link } from "react-router-dom"
import { store } from './App';

import "./Navbar.css"

const Navbar = () => {
    const [token, setToken] = useContext(store)
    console.log(setToken)
    return (
        <div>{!token ?
                <ul className='navbar'>
                    <Link to='/register' ><li className='list'>Register</li></Link>
                    <Link to='/login' ><li className='list'>Login</li></Link>
                </ul>

            
           
            :
            <div></div>
}

        </div>
    )
}

export default Navbar
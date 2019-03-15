import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
       <nav className="nav-wrapper cyan darken-1">
            <div className="container">
                <a className="brand-logo">Routeryan</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li> 
                </ul>
            </div>
       </nav>
    )

}

export default Navbar
import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {

    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)

    return (
       <nav className="nav-wrapper cyan darken-1">
            <div className="container">
                <a className="left brand-logo"><span className="amber-text"><b>Shawn</b></span>FLASH</a>
                <ul className="right">
                    <li><Link to="/cards">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    {/* <li><NavLink to="/contact">Contact</NavLink></li>  */}
                    <li><NavLink to="/movies">Movies</NavLink></li> 
                    <li><NavLink to="/cards">Flashcards</NavLink></li> 
                </ul>
            </div>
       </nav>
    )

}

// High order function
// Wrapping the component => supercharging this component
// Apply this properties to this props
// As React Router wrapped all the component, and Navbar is not in them
export default withRouter(Navbar)
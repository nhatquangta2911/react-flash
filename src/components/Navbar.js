import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'
import jwt from 'jsonwebtoken';
import styles from './Navbar.scss';

const handleLogout = () => {
    window.localStorage.removeItem('token');
};

const Navbar = (props) => {

    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)
    const token = window.localStorage.getItem('token');
    const user = token && jwt.decode(token);
    return (
       <nav className="nav-extends cyan darken-1">
            <div className="container">
                <a id="shawn-logo" className="left brand-logo"><span className="amber-text"><b>Shawn</b></span>FLASH</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cards">Flashcards</Link></li> 
                    <li><Link to="/chat">Contact</Link></li> 
                    {/* <Link><Link to="/about">About</Link></Link> */}
                    {!token && <li><Link to="/auth">Login</Link></li>}
                    {token && user && user.name && <li><Link to="/profile">Welcome <b>{user.name}</b></Link></li>}
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

// import React from "react";
// import { Link, NavLink, withRouter } from "react-router-dom";
// import jwt from "jsonwebtoken";

// const handleLogout = () => {
//    window.localStorage.removeItem("token");
// };

// const Navbar = props => {
//    // setTimeout(() => {
//    //     props.history.push('/about')
//    // }, 2000)
//    const token = window.localStorage.getItem("token");
//    const user = token && jwt.decode(token);
//    return (
//       <div>
//          <nav className=" cyan darken-1">
//             <div className="nav-wrapper">
//                <a href="#" className=" brand-logo">
//                   <span className="amber-text">
//                      <b>Shawn</b>
//                   </span>
//                   FLASH
//                </a>
//                {/* <a
//                   href="#"
//                   data-target="mobile-demo"
//                   className="sidenav-trigger"
//                >
//                   <i className="material-icons">menu</i>
//                </a> */}
//                <ul className="right hide-on-med-and-down">
//                   <li>
//                      <Link to="/">Home</Link>
//                   </li>
//                   <li>
//                      <Link to="/cards">Flashcards</Link>
//                   </li>
//                   {/* <Link><Link to="/about">About</Link></Link> */}
//                   {!token && (
//                      <li>
//                         <Link to="/auth">Login</Link>
//                      </li>
//                   )}
//                   {token && user && user.name && (
//                      <li>
//                         <Link to="/profile">
//                            Welcome <b>{user.name}</b>
//                         </Link>
//                      </li>
//                   )}
//                   {token && (
//                      <li onClick={handleLogout}>
//                         <Link to="/">Logout</Link>
//                      </li>
//                   )}
//                </ul>
//             </div>
//          </nav>
//          <ul className="sidenav" id="mobile-demo">
//             <li>
//                <Link to="/">Home</Link>
//             </li>
//             <li>
//                <Link to="/cards">Flashcards</Link>
//             </li>
//             {/* <Link><Link to="/about">About</Link></Link> */}
//             {!token && (
//                <li>
//                   <Link to="/auth">Login</Link>
//                </li>
//             )}
//             {token && user && user.name && (
//                <li>
//                   <Link to="/profile">
//                      Welcome <b>{user.name}</b>
//                   </Link>
//                </li>
//             )}
//             {token && (
//                <li onClick={handleLogout}>
//                   <Link to="/">Logout</Link>
//                </li>
//             )}
//          </ul>
//       </div>
//    );
// };

// // High order function
// // Wrapping the component => supercharging this component
// // Apply this properties to this props
// // As React Router wrapped all the component, and Navbar is not in them
// export default withRouter(Navbar);

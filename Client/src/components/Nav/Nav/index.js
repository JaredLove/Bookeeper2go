import React from "react";
import { Link } from 'react-router-dom';



const Nav = () => {

    return (
        <div className="navDiv">
            <p className="brand">Bookeeper2Go</p>
        <nav>
            <ul>
                <li>
            <Link className="link" as={Link} to='/'>
                  Home
                  </Link>
                  </li>
                  <li>
            <Link className="link" as={Link} to='/aboutme'>
                  About Me
                  </Link>
                  </li>
                  <li>
            <Link className="link" as={Link} to='/services'>
                  Services
                  </Link>
                  </li>
                  <li>
            <Link className="link" as={Link} to='/login'>
                    Login
                  </Link>
                  </li>
                  <li>
            <Link className="link"as={Link} to='/signup'>
                    Signup
            </Link>
            </li>

            </ul>
        </nav>
        </div>

    )
}


export default Nav;
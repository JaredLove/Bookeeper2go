import React from "react";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../../utils/queries';
import Auth from '../../utils/auth';


const Nav = () => {
   const { data } = useQuery(GET_ME);
   const userData = data?.me || {};
  //  console.log(userData);
    return (
        <div className="navDiv">
            <p className="brand">Bookeeper2Go</p>
              
            {Auth.loggedIn() ? (
                <nav> 
                  <ul>    
                  <li>
                  <p>Hello {userData.username} </p>
                  </li>
                  <li>
            <Link className="link" as={Link} to='/'>
                  Home
                  </Link>
                  </li>
                  <li>
            <Link className="link" as={Link} to='/role'>
                  Roles
                  </Link>
                  </li>
                  <li>
            <Link className="link" as={Link} to='/aboutme'>
                  About
                  </Link>
                  </li>
                  <li>
            <Link className="link" as={Link} to='/services'>
                  Services
                  </Link>
                  </li>
              
                  <li>
                  <Link onClick={Auth.logout}>Logout</Link>
                  </li>
                  </ul>
                 </nav>
                
                  
              ) : (
                <nav>
                  <ul>          
                  <li>
            <Link className="link" as={Link} to='/'>
                  Home
                  </Link>
                  </li>
                  <li>
            <Link className="link" as={Link} to='/aboutme'>
                  About
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
                  </ul> 
                  </nav>
                 
              )}
    
                

 
        </div>

    )
}


export default Nav;
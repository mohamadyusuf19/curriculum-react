import React from 'react';
import './Navbar.styles.scss'
import { NavLink } from 'react-router-dom'

export default function index() {
    return (
        <div className="navbar">
            <NavLink className="link" to="/reactjs" activeClassName="active" ><span> React JS</span> </NavLink>
            <NavLink className="link" to="/reactnative" activeClassName="active" ><span> React Native</span> </NavLink>            
        </div>
    );
}
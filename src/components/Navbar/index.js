import React from 'react';
import './Navbar.styles.scss'
import { NavLink } from 'react-router-dom'

export default function index() {
    return (
        <div className="navbar">
            <NavLink className="link" to="/modern" activeClassName="active" ><span> Modern JavaScript</span> </NavLink>
            <NavLink className="link" to="/thingking" activeClassName="active" ><span> Thinking in React</span> </NavLink>
            <NavLink className="link" to="/routing" activeClassName="active" ><span> Routing</span> </NavLink>
            <NavLink className="link" to="/form" activeClassName="active" ><span> Form</span> </NavLink>
            <NavLink className="link" to="/styling" activeClassName="active" ><span> Styling</span> </NavLink>
            <NavLink className="link" to="/redux" activeClassName="active" ><span> Redux</span> </NavLink>
            <NavLink className="link" to="/testing" activeClassName="active" ><span> Testing</span> </NavLink>
            <NavLink className="link" to="/pattern" activeClassName="active" ><span> Pattern Concept</span> </NavLink>            
        </div>
    );
}
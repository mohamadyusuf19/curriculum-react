import React from 'react';
import './Navbar.styles.scss'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer';

export default function index() {
    return (
        <div className="navbar">
            <NavLink className="link" to="/reactjs" activeClassName="active" ><i class="fab fa-react"></i><span> React JS</span> </NavLink>
            <NavLink className="link" to="/reactnative" activeClassName="active" ><i class="fab fa-android"></i><span> React Native</span> </NavLink>            
            <NavLink className="link" to="/java" activeClassName="active" ><i class="fab fa-java"></i><span> Java</span> </NavLink>            
            <NavLink className="link" to="/php" activeClassName="active" ><i class="fab fa-php"></i><span> PHP</span> </NavLink>            
            <NavLink className="link" to="/detail" activeClassName="active" ><i class="fas fa-info-circle"></i><span> Detail</span> </NavLink>
            <Footer/>
        </div>
    );
}
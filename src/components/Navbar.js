import React from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
    return(
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    <NavLink to="/my-website">Projects</NavLink>
                    <NavLink to="/my-website/about">About Me</NavLink>
                </div>
            </div>
            <div className="rightSide">
                {/* <input type="text" placeholder="Search..."/> */}
            </div>
        </div>
    );
}

export default Navbar
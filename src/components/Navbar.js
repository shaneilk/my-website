import React from 'react'
import '../App.css';

function Navbar() {
    return(
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    <a href="/my-website">Projects</a>
                    <a href="/my-website/about">About Me</a>
                </div>
            </div>
            <div className="rightSide">
                {/* <input type="text" placeholder="Search..."/> */}
            </div>
        </div>
    );
}

export default Navbar
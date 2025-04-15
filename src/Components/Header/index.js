import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import './index.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
    }
    
    return(
        <nav className="header-container">
            <div className="logo-container">
                <img className="logo" src="/images/pic.jpg" alt="Krishna Kanth" />
                <h1 className="logo-text">Krishna Kanth</h1>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <GiHamburgerMenu />
                {menuOpen? 
                (<ul className="nav-links1">
                    <li><a href="#about" className="nav-link-item">About</a></li>
                    <li><a href="#skills" className="nav-link-item">Skills</a></li>
                    <li><a href="#contacts" className="nav-link-item">Contact</a></li>
                    <li><a href="#resume-download" className="nav-link-item">Resume</a></li>
                </ul>) :""}
            </div>
            <ul className="nav-links">
                <li><a href="#about" className="nav-link-item">About</a></li>
                <li><a href="#skills" className="nav-link-item">Skills</a></li>
                <li><a href="#contacts" className="nav-link-item">Contact</a></li>
                <li><a href="#resume-download" className="nav-link-item">Resume</a></li>
            </ul>
            
        </nav>
    )
}

export default Header;
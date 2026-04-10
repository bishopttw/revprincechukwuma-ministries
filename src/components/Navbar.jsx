import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="nav-holder">
            <div className="logo-holder">
                <img src={logo} alt="Rcba logo" className="logo"/>
                <h3>Rev Prince Chukwuma</h3>
            </div>
            <button className="hamburger-icon"
             onClick={() => setIsOpen(!isOpen)}
            >{isOpen ? <IoClose/> : <GiHamburgerMenu/>}</button>
            <ul className={isOpen ? "menu open" : "menu"}>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/rcba">GBPC</NavLink></li>
                    <li><NavLink to="/umuboyii">Umuboyii</NavLink></li>
                    <li><NavLink to="/powersound">Power Sound</NavLink></li>
                    <li><NavLink to="/ministry">Ministry</NavLink></li>
            </ul>
        </div>
    );
}
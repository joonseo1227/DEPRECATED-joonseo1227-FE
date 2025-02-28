import {useState} from "react";
import "./Headermain.css";
import {Link} from "react-router-dom";
import {logotext, social} from "../content_option.js";
import ThemeToggle from "../components/ThemeToggle/ThemeToggle.jsx";
import {CloseLarge, Menu} from '@carbon/icons-react';

const Headermain = () => {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle("ovhidden");
    };

    return (
        <>
            <header className="fixed-top site__header">
                <div className="d-flex align-items-center justify-content-between">
                    <Link className="navbar-brand nav_ac" to="/">
                        {logotext}
                    </Link>

                    <div className="navbar-bg"></div>

                    <div className="d-flex align-items-center">
                        <ThemeToggle/>
                        <button className="nav_ac" onClick={handleToggle}>
                            {!isActive ? <CloseLarge size="24"/> : <Menu size="24"/>}
                        </button>
                    </div>

                </div>

                <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
                    <div className="bg__menu h-100">
                        <div className="menu__wrapper">

                            <div className="menu__container p-3">
                                <ul className="the_menu">
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/" className="my-3">Home</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/portfolio" className="my-3">Portfolio</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/blog" className="my-3">Blog</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/about" className="my-3">About</Link>
                                    </li>
                                    <li className="menu_item">
                                        <Link onClick={handleToggle} to="/contact" className="my-3">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div
                            className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
                            <div className="d-flex">
                                <a href={social.github}>GitHub</a>
                                <a href={social.instagram}>Instagram</a>
                                <a href={social.linkedin}>LinkedIn</a>
                                <a href={social.youtube}>YouTube</a>
                            </div>
                            <p className="copyright m-0">ⓒ 2025. {logotext} All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
};

export default Headermain;

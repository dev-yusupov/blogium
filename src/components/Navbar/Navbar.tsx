import React, { useRef } from "react";
import GitHub from "./GitHub";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar: React.FC = () => {

    const NavbarRef = useRef<HTMLDivElement | any>(null);

    const showNavbar = () => {
        NavbarRef.current.classList.add("Navbar-Items-Active");
        NavbarRef.current.classList.remove("Navbar-Items");
    }
    const hideNavbar = () => {
        NavbarRef.current.classList.remove("Navbar-Items-Active");
    }

    return (
        <div className="Navbar">
            <div className="Navbar-Logo">
                <h1>Blogium</h1>
            </div>
            <div className="Navbar-Items" ref={NavbarRef}>
                <ul>
                    <li className="Navbar-Item">
                        <a href="/">Home</a>
                    </li>
                    <li className="Navbar-Item">
                        <a href="/posts">Posts</a>
                    </li>
                    <li className="Navbar-Item">
                        <a href="/users">Users</a>
                    </li>
                </ul>
            </div>
            <div className="Navbar-Items-Right">
                <div className="Navbar-GitHub">
                    <GitHub />
                </div>
                <GiHamburgerMenu size={"27px"} color="#408085" className="Navbar-Hamburger" onClick={showNavbar} />
            </div>
        </div>
    )


}

export default Navbar
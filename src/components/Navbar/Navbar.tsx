/* eslint-disable array-callback-return */
import React, { useEffect, useRef } from "react";
import GitHub from "./GitHub";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiMiniXMark } from "react-icons/hi2"
import routers from "../../routers";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {

    const NavbarRef = useRef<HTMLDivElement | any>(null);

    const showNavbar = () => {
        NavbarRef.current.classList.add("Navbar-Items-Active");
        NavbarRef.current.classList.remove("Navbar-Items");
    }
    const hideNavbar = () => {
        NavbarRef.current.classList.remove("Navbar-Items-Active");
        NavbarRef.current.classList.add("Navbar-Items");
    }

    const location = useLocation();

    useEffect(() => {
        const currentRoute = routers.find(route => route.path === location.pathname);

        if (currentRoute) {
            document.title = `${currentRoute.name} | Blogium`;
        } else {
            document.title = `Blogium`
        }
    }, [location.pathname])

    return (
        <div className="Navbar">
            <div className="Navbar-Logo">
                <h1>Blogium</h1>
            </div>
            <div className="Navbar-Items" ref={NavbarRef}>
                <HiMiniXMark className="Navbar-XMark" size={"27px"} onClick={hideNavbar} />
                <ul>
                    {
                        routers.map((router, key) => {
                            if (router.layout === "/") {
                                return (
                                    <li className="Navbar-Item" key={key}>
                                        <a href={router.path}>{router.name}</a>
                                    </li>
                                )
                            }
                        })
                    }
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
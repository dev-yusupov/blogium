import React from "react";
import GitHub from "./GitHub";
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar: React.FC = () => {

    return (
        <div className="Navbar">
            <div className="Navbar-Logo">
                <h1>Blogium</h1>
            </div>
            <div className="Navbar-Items">
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
                <GiHamburgerMenu size={"27px"} color="#408085" />
            </div>
        </div>
    )


}

export default Navbar
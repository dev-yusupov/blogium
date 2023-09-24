import React, { Component } from "react";
import { Navbar } from "../components";

class MainLayout extends Component {
    render(): React.ReactNode {
        return (
            <>
                <Navbar />
                <h1>Working</h1>
            </>
        )
    }
}

export default MainLayout
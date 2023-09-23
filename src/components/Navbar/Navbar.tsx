import React, { Component } from "react";

class Navbar extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = { count: 0 }
    }

    render() {
        return (
            <div className="Navbar">
                <p>Working</p>
            </div>
        )
    }

}

export default Navbar
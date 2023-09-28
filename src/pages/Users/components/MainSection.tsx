import React from "react";
import "../Users.scss";

interface MainSectionProps {
    name: string;
    username: string;
}

const MainSection = ({ name, username }: MainSectionProps) => {
    return (
        <div className="MainSection">
            <div className="MainSection-Central-Text">
                <h1>{name}</h1>
                <p>{username}</p>
            </div>
        </div>
    )
}

export default MainSection
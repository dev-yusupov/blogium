import React from "react";
import "../Home.scss"
import { FilledButton, UnFilledButton } from "../../../components";

const MainSection: React.FC = () => {
    return (
        <div className="MainSection">
            <div className="MainSection-Central-Text">
                <h1>Blogium</h1>
                <div className="MainSection-Central-Text-Paragraph">
                    <p>Developed by <a href="https://github.com/dev-yusupov" target="_blank" rel="noreferrer">Bobur Yusupov(@dev-yusupov)</a></p>
                    <p>It is a simple Webapp created using <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a></p>
                </div>
            </div>
            <div className="MainSection-Links">
                <FilledButton>Try Blogium</FilledButton>
                <UnFilledButton>Preview</UnFilledButton>
            </div>
        </div>
    )
}

export default MainSection
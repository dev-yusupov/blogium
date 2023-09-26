import React from "react";
import { IconButtonProp } from "./utils";

const IconButton = ({ icon }: IconButtonProp) => {
    return (
        <button className="IconButton">{icon}</button>
    )
}

export default IconButton
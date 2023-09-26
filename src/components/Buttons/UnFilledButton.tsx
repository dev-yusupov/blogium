import React from "react";
import { ButtonProps } from "./utils";

const UnFilledButton = ({ children }: ButtonProps) => {
    return (
        <button className="Btn UnFilledButton">{children}</button>
    )
}

export default UnFilledButton
import React from "react";
import { ButtonProps } from "./utils";

const FilledButton = ({ children }: ButtonProps) => {
    return (
        <button className="Btn FilledButton">{children}</button>
    )
}

export default FilledButton
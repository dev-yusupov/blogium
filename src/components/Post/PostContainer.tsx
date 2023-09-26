import React from "react";
import { PostContainerProps } from "./interfaces";

const PostContainer = ({ title }: PostContainerProps) => {
    return (
        <div className="PostContainer">
            <h1>{title}</h1>
        </div>
    )
}

export default PostContainer
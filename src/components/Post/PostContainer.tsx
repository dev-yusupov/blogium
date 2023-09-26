import React, { useEffect, useState } from "react";
import { PostContainerProps } from "./interfaces";
import axios from "axios";

import { IconButton } from "../index"

// Icons
import { BiSolidShare } from "react-icons/bi";
import { AiFillLike } from "react-icons/ai";

const PostContainer = ({ title, body, userId }: PostContainerProps) => {

    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => {
            setUsers(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    return (
        <div className="PostContainer">
            <div className="PostContainer-Left">
                <div className="PostContainer-Author">
                    {users[userId] &&
                        <p>Author: {users[userId].name}</p>   
                    }
                </div>
                <div className="PostContainer-Body">
                    <h1 className="PostContainer-Title">{title}</h1>
                    <p className="PostContainer-Body">{body}</p>
                </div>
            </div>
            <div className="PostContainer-Right">
                <div>
                    <IconButton icon={<BiSolidShare />} />
                </div>
                <div>
                    <IconButton icon={<AiFillLike />} />
                </div>
            </div>
        </div>
    )
}

export default PostContainer
import React, { useState, useEffect } from "react";
import axios from "axios";

const PostUsersSection = () => {
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
        <div className="PostUsersSection">
            <h3 className="PostUsersSection-Title">Users</h3>
            <div className="PostUsersSection-Users">
                {
                    users.map((user) => {
                        return (
                            <>
                                <a href={`/users/user/${user.id}`} className="PostUsersSection-UserName">{user.name}</a>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostUsersSection
import axios from "axios";
import React, { useState, useEffect } from "react";

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    // Fetch data from JSONPlaceholder
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => {
            setPosts(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <h2 key={post.id}>{post.title}</h2>
                    )
                })
            }
        </>
    )
}  

export default Posts
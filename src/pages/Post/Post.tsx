import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navbar, PostContainer } from "../../components";

// Import Scss
import "./Post.scss";

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
            <Navbar />
            <div className="Posts">
                {
                    posts.map((post) => {
                        return (
                            <PostContainer title={post.title} body={post.body} userId={post.userId} />
                        )
                    })
                }
            </div>
        </>
    )
}  

export default Posts
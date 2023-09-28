import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, PostContainer } from "../../components";
import MainSection from "./components/MainSection";

const UserDetails = () => {
    const [userData, setUserData] = useState<any[string]>([]);
    const [posts, setPosts] = useState<any[]>([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            setUserData(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) => {
            setPosts(response.data)
        })
        .catch((error) => {
            console.error(error);
        })
    }, [id])

    if (userData) {
        document.title = `${userData.name} | Blogium`;
    } else {
        document.title = `Blogium`;
    }

    return (
        <>
            <Navbar />
            <MainSection name={ userData.name } username={userData.username} />
            <div className="UserPosts">
                <h1 className="UserPosts-Title">Posts</h1>
                {
                    posts.map((post) => {
                        return (
                            <PostContainer title={post.title} body={post.body} userId={userData.id-1} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default UserDetails
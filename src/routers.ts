import Posts from "./pages/posts"

const routers = [
    {
        path: "/posts",
        component: Posts,
        layout: "/",
        name: "Posts"
    }
]

export default routers
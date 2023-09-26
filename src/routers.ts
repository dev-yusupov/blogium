import Posts from "./pages/posts"
import Home from "./pages/Home"

const routers = [
    {
      layout: "/",
      path: "/",
      component: Home,
      name: "Home"
    },
    {
      layout: "/",
      path: "/posts",
      component: Posts,
      name: "Posts"
    },
    // Add more routes as needed
  ];

export default routers
import Home from "./pages/Home/Home"
import Posts from "./pages/Post";

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
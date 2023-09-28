import Home from "./pages/Home/Home"
import Posts from "./pages/Post";
import Users from "./pages/Users";

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
    {
      layout: "/",
      path: "/users",
      component: Users,
      name: "Users"
    }
    // Add more routes as needed
  ];

export default routers
import Tweet from "../pages/Tweet";
import Login from "../pages/Login";
import UpdateTweet from "../pages/UpdateTweet";

const routes = [
    {path: "/", name: "home", component: Tweet},
    {path: "/tweet", name: "tweet", component: Tweet},
    {path: "/login", name: "login", component: Login},
    {path: "/update", name: "UpdateTweet", component: UpdateTweet},
]; 

export default routes;
import Tweet from "../pages/Tweet";
import Login from "../pages/Login";
import UpdateTweet from "../pages/UpdateTweet";
import registrasi from "../pages/registrasi";

const routes = [
    {path: "/", name: "home", component: Tweet},
    {path: "/tweet", name: "tweet", component: Tweet},
    {path: "/login", name: "login", component: Login},
    {path: "/update", name: "UpdateTweet", component: UpdateTweet},
    {path: "/registration", name: "registration", component: registrasi},
]; 

export default routes;
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Errorpage from "../pages/errorpage/Errorpage";
import FriendDetails from "../pages/friendDetails/FriendDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: "/friendDetails/:id",
                loader: () => fetch("/friends.json"),
                Component: FriendDetails,
            },
        ],
        errorElement: <Errorpage></Errorpage>,
    },
]);

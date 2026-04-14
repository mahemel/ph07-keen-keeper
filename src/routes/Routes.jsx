import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Errorpage from "../pages/errorpage/Errorpage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage,
            },
        ],
        errorElement: <Errorpage></Errorpage>,
    },
]);

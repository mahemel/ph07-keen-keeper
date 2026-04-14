import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import TimelineProvider from "./contexts/TimelineContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <TimelineProvider>
            <RouterProvider router={router}></RouterProvider>
            <ToastContainer></ToastContainer>
        </TimelineProvider>
    </StrictMode>,
);

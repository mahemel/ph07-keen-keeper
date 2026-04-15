import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <main className="py-10 px-5 md:py-10 md:px-8 lg:px-10 lg:py-15 xl:p-20 container mx-auto">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;

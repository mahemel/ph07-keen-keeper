import React from "react";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

const Errorpage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="text-center space-y-6 py-20 px-5">
                <h1 className="text-7xl font-extrabold text-dark-green">404</h1>

                <h2 className="text-2xl md:text-3xl font-semibold text-dark-black">
                    Oops! Page not found
                </h2>
                <p className="text-light-gray max-w-md mx-auto">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="/" className="btn bg-dark-green text-white">
                        Go Back to Home
                    </a>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Errorpage;

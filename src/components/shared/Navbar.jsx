import React from "react";

import Logo from "./../../assets/logo.png";
import { PiChartLineBold } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";
import { TbClockHour3 } from "react-icons/tb";
import NavBarLinks from "./NavBarLinks";

const Navbar = () => {
    const links = [
        {
            path: "/",
            name: "Home",
            icon: <RiHome2Line></RiHome2Line>,
        },
        {
            path: "/timeline",
            name: "Timeline",
            icon: <TbClockHour3></TbClockHour3>,
        },
        {
            path: "/stats",
            name: "Stats",
            icon: <PiChartLineBold></PiChartLineBold>,
        },
    ];

    return (
        <div className="navbar bg-base-100 shadow-sm px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links.map((link, index) => (
                            <NavBarLinks key={index} link={link}></NavBarLinks>
                        ))}
                    </ul>
                </div>
                <a>
                    <img src={Logo} alt="KeenKeeper Logo" />
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link, index) => (
                        <NavBarLinks key={index} link={link}></NavBarLinks>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

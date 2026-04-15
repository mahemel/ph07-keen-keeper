import LogoXL from "./../../assets/logo-xl.png";
import Facebook from "./../../assets/facebook.png";
import Twitter from "./../../assets/twitter.png";
import Instagram from "./../../assets/instagram.png";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-dark-green mt-auto pb-4 lg:pb-5.5 xl:pb-7.5  pt-10 lg:pt-15 xl:pt-20">
            <div className="w-9/12 mx-auto text-base text-center flex flex-col items-center">
                <Link className="mb-4" to="/">
                    <img
                        className="w-55 lg:w-75 xl:w-103"
                        src={LogoXL}
                        alt="Footer Logo"
                    />
                </Link>

                <p className="text-white/80 text-sm xl:text-base mb-6">
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                </p>

                <p className="text-lg xl:text-xl text-white font-medium mb-4">
                    Social Links
                </p>
                <ul className="flex gap-3 mb-6 lg:mb-10">
                    <li>
                        <a href="#">
                            <img src={Instagram} alt="Instagram Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Facebook} alt="Facebook Logo" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Twitter} alt="Twitter Logo" />
                        </a>
                    </li>
                </ul>

                <div className="border-t border-[#1A8862]/20  pt-4 lg:pt-5.5 xl:pt-7.5 flex flex-col md:flex-row justify-center md:justify-between w-full text-white/50  text-[12px] lg:text-sm xl:text-base gap-3 md:gap-0">
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

                    <ul className="flex gap-5 justify-center md:justify-baseline lg:gap-10">
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Cookies</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

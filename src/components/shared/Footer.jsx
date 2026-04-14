import LogoXL from "./../../assets/logo-xl.png";
import Facebook from "./../../assets/facebook.png";
import Twitter from "./../../assets/twitter.png";
import Instagram from "./../../assets/instagram.png";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-dark-green mt-auto pt-20 pb-7.5">
            <div className="w-9/12 mx-auto text-base text-center flex flex-col items-center">
                <Link className="mb-4" href="/">
                    <img src={LogoXL} alt="Footer Logo" />
                </Link>

                <p className="text-white/80 text-base mb-6">
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                </p>

                <p className="text-xl text-white font-medium mb-4">
                    Social Links
                </p>
                <ul className="flex gap-3 mb-10">
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

                <div className="border-t border-[#1A8862]/20 pt-7.5 flex justify-between w-full text-white/50 text-base">
                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

                    <ul className="flex gap-10">
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

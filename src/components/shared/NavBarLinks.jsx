import { NavLink } from "react-router";

const NavBarLinks = ({ link }) => {
    return (
        <li>
            <NavLink
                to={link.path}
                className={({ isActive }) =>
                    `font-medium flex items-center gap-1 h-11 rounded px-4 text-base ${
                        isActive
                            ? "active text-white bg-[#244D3F]"
                            : "text-[#64748B] bg-transparent"
                    }`
                }
            >
                <span className="text-xl">{link.icon}</span>
                {link.name}
            </NavLink>
        </li>
    );
};

export default NavBarLinks;

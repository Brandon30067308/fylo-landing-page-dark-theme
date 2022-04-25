import { FC } from "react";
import Logo from "../common/Logo";

const Nav: FC = () => {
  return (
    <nav
      className="Nav w-full font-raleway text-white flex items-center justify-between
    mt-8 sm:mt-12 mb-4 sm:mb-10"
    >
      <Logo />
      <ul className="flex flex-wrap list-none ml-5 flex-[0.985] justify-between xs:justify-end">
        <li className="group mr-3.5 sm:mr-7">
          <a
            className="transition-all group-hover:underline text-[15px] sm:text-base tracking-wide
              cursor-pointer"
          >
            Features
          </a>
        </li>
        <li className="group mr-3.5 sm:mr-7">
          <a
            className="transition-all group-hover:underline text-[15px] sm:text-base tracking-wide
              cursor-pointer"
          >
            Team
          </a>
        </li>
        <li className="group">
          <a
            className="transition-all group-hover:underline text-[15px] sm:text-base tracking-wide
              cursor-pointer"
          >
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

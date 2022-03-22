import { FC } from "react";
import Logo from "../common/Logo";

const Nav: FC = () => {
  return (
    <nav
      className="Nav w-full font-raleway text-white flex items-center justify-between min-h-[12vh]
        lg:max-w-[94vw] px-4 sm:px-8"
    >
      <Logo />
      <ul className="flex flex-wrap list-none ml-5 flex-[0.95] justify-between xs:justify-end">
        <li className="group mr-2.5 sm:mr-7">
          <a
            className="transition-all group-hover:underline text-[15px] sm:text-base tracking-wide
              cursor-pointer"
          >
            Features
          </a>
        </li>
        <li className="group mr-2.5 sm:mr-7">
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

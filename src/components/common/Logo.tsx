import { FC } from "react";
import logoImage from "../../images/logo.svg";

const Logo: FC = () => {
  return (
    <div>
      <img
        src={logoImage}
        alt="logo"
        className="Logo max-w-[88px] sm:max-w-[110px]"
      />
    </div>
  );
};

export default Logo;

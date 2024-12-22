import React from "react";
import Logo from "../asset/img/Logo.png";

const Header = () => {
  return (
    <div className="absolute p-5 w-full bg-gradient-to-b from-black">
      <img className="w-44" src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;

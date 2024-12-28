import React from "react";
import Logo from "../asset/img/Logo.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute p-5 w-full bg-gradient-to-b from-black flex justify-between">
      <img className="w-44" src={Logo} alt="Logo" />

      {user && (
        <div>
          <button onClick={handleSignOut} className="p-2 bg-red-500 rounded-lg">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

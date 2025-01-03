import Logo from "../asset/img/Logo.png";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  return (
    <div className="absolute top-0 p-5 w-full bg-gradient-to-b from-black flex justify-between">
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

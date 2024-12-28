import React, { useEffect, useState } from "react";
import Header from "./Header";
import Login from "./Login/Login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../store/userSlice";
import { auth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    });
  }, []);
  if (loading) {
    return <div className="bg-red-500 mt-6">Loading...</div>;
  }
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
};

export default Body;

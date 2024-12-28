import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";

const Browse = () => {
  // const { displayName } = useSelector((store) => store.user);
  return (
    <div>
      <Header />
      {/* <h1>{displayName}</h1> */}
    </div>
  );
};

export default Browse;

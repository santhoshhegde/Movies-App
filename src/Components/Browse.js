import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  // const { displayName } = useSelector((store) => store.user);
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

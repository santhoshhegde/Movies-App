import { nowPlayingAPIURL, options } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import React from "react";
import VideoBackground from "./VideoBackground";
import MoviesList from "./MoviesList";

const MainContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    nowPlaying();
  }, []);
  const nowPlaying = async () => {
    const response = await fetch(nowPlayingAPIURL, options);
    if (response.status === 200) {
      const data = await response.json();
      dispatch(addNowPlayingMovies(data));
    }
  };
  return (
    <div>
      <VideoBackground />
      <MoviesList />
    </div>
  );
};

export default MainContainer;

import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movie = useSelector((store) => store.movie.nowPlayingMovies);
  if (!movie) return;
  const mainMovie = movie[0];
  const { title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={title} info={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;

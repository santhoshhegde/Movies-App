import React from "react";
import { img_url } from "../utils/Constants";

const MovieCard = ({ moviePosterURL }) => {
  return (
    <img src={img_url + moviePosterURL} alt="movies card" loading="lazy" />
  );
};

export default MovieCard;

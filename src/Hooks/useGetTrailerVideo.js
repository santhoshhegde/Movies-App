import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { options } from "../utils/Constants";
import { addTrailerVideo } from "../store/moviesSlice";

const useGetTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      options
    );
    const data = await response.json();
    const filteredData = data?.results?.filter(
      (movieTrailer) => movieTrailer.type === "Trailer"
    );
    const trailerData = filteredData.length
      ? filteredData[0]
      : data?.results[0];
    dispatch(addTrailerVideo(trailerData));
  };
};

export default useGetTrailerVideo;

import { useDispatch, useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import { useEffect } from "react";
import { options } from "../utils/Constants";
import { addTrailerVideo } from "../store/moviesSlice";

const VideoBackground = () => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.trailerVideo);
  const movie = useSelector((store) => store.movie.nowPlayingMovies);
  // const movie_id = movie?.results[0]?.id;
  console.log(movie?.results[0].title);
  useEffect(() => {
    getTrailerVideos();
  }, []);

  const getTrailerVideos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/558449/videos`,
      options
    );
    const data = await response.json();
    const trailers = data?.results?.filter(
      (movieTrailer) => movieTrailer.type === "Trailer"
    );
    dispatch(addTrailerVideo(trailers));
  };

  if (!movie) return;
  if (!trailer) return;
  return (
    <>
      <div>
        <iframe
          className="w-screen h-screen"
          width="560"
          height="315"
          src={
            "https://www.youtube.com/embed/" +
            trailer[0].key +
            "?si=zaKAImO88LxJ5MzN&mute=1&autoplay=1&loop=1&playlist=" +
            trailer[0].key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
      <VideoTitle
        title={movie?.results[0].title}
        info={movie?.results[0].overview}
      />
    </>
  );
};

export default VideoBackground;

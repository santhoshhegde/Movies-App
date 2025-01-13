import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesList = () => {
  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  // console.log(movies);
  if (!movies) return;

  return (
    <div className="flex overflow-x-scroll gap-2">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} moviePosterURL={movie.poster_path} />
      ))}
    </div>
  );
};

export default MoviesList;

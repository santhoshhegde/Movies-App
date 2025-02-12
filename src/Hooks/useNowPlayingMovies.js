import { nowPlayingAPIURL, options } from "../utils/Constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    nowPlaying();
  }, []);
  const nowPlaying = async () => {
    const response = await fetch(nowPlayingAPIURL, options);
    if (response.status === 200) {
      const data = await response.json();
      dispatch(addNowPlayingMovies(data.results));
    }
  };
};

export default useNowPlayingMovies;

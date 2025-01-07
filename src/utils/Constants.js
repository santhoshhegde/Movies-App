// API urls
export const nowPlayingAPIURL =
  "https://api.themoviedb.org/3/movie/now_playing";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_ACESS_TOKEN,
  },
};

export const img_url = "https://image.tmdb.org/t/p/w200";

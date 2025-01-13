import { useSelector } from "react-redux";
import useGetTrailerVideo from "../Hooks/useGetTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movie.trailerVideo);
  useGetTrailerVideo(movieId);
  if (!trailer) return;
  return (
    <>
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailer.key +
            "?si=zaKAImO88LxJ5MzN&mute=1&autoplay=1&loop=1&playlist=" +
            trailer.key
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </>
  );
};

export default VideoBackground;

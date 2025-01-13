const VideoTitle = ({ title, info }) => {
  return (
    <div className="absolute top-0 text-white bg-gradient-to-r from-black aspect-video px-16">
      <h3 className="font-bold text-3xl text-white pt-[25vh]">{title}</h3>
      <p className="w-1/4 text-sm my-3">{info}</p>
      <button className="bg-white text-black p-2 rounded-md hover:bg-opacity-90">
        Play
      </button>
      <button className="bg-gray-600 opacity-90 p-2 m-2 rounded-md hover:bg-opacity-90">
        More info
      </button>
    </div>
  );
};

export default VideoTitle;

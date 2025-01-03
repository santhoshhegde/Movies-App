import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const Browse = () => {
  // const { displayName } = useSelector((store) => store.user);
  return (
    <div>
      <Header />
      {/* <h1>{displayName}</h1> */}
      <div className="mt-40 flex gap-10 overflow-scroll">
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
        <MoviesList />
      </div>
    </div>
  );
};

export default Browse;

import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispath = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1&region=IN', API_OPTIONS);
    const moviesList = await data.json();
    dispath(addPopularMovies(moviesList.results))
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default usePopularMovies;
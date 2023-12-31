import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispath = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1&region=IN', API_OPTIONS);
    const moviesList = await data.json();
    dispath(addUpcomingMovies(moviesList.results))
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useUpcomingMovies;
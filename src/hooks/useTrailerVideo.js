import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
    const json = await data.json();
    if (json.results?.length > 0) {
      const firstTrailer = json.results.find(res => res.type === "Trailer") ?? json.results[0];
      dispatch(addTrailerVideo(firstTrailer));
    }
  }

  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useTrailerVideo;
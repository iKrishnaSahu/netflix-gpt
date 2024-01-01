import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {

  const suggestedMovies = useSelector(store => store.gpt.suggestedMovies);

  if(!suggestedMovies) {
    return;
  }

  return (
    <div>
      <MovieList title={"Suggested Movies"} movies={suggestedMovies} />
    </div>
  )
}

export default GptMovieSuggestion
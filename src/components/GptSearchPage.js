import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addSuggestedMovie } from '../utils/gptSlice';

const GptSearchPage = () => {
  const language = useSelector(store => store.appConfig?.language);
  const searchInput = useRef(null);
  const dispatch = useDispatch();

  const findMaxPopularityItem = (movies) => {
    if (movies.length === 0) {
      return null;
    }
    let maxPopularityItem = movies[0];
    for (let i = 1; i < movies.length; i++) {
      if (movies[i].popularity > maxPopularityItem.popularity) {
        maxPopularityItem = movies[i];
      }
    }
    return maxPopularityItem;
  }

  const fetchMovie = async (movieName) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1&region=IN`, API_OPTIONS);
    const json = await data.json();
    return findMaxPopularityItem(json.results);
  }

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const searchText = searchInput.current.value;
    if (searchText && searchText.length > 0) {
      // const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText + ". Only give me name of 5 movies, comman separated like the example result given ahead. Example Result: Gadar, Golmal, Hera Feri, Chup Chup ke, Animal";
      // const gptResult = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: gptQuery }],
      //   model: 'gpt-3.5-turbo',
      // });
      // console.log(gptResult.choices);
      // if (!gptResult.choices) {
      //   // error
      // }
      // const gptSuggestMovies = gptResult.choices?.[0]?.message?.content;

      const gptSuggestMovies = 'Gadar, Golmaal, hera pheri, Chup Chup ke, Animal';
      const suggestMovieList = gptSuggestMovies.trim().split(',').map((mov) => mov.trim());
      const promiseList = suggestMovieList.map((movie) => fetchMovie(movie));
      const moviesData = await Promise.all(promiseList);
      dispatch(addSuggestedMovie(moviesData));
    }
  }

  return (
    <div className='p-6 pt-44 flex justify-center'>
      <form onSubmit={formSubmitHandler}>
        <input ref={searchInput} type='string' className="p-4 w-96" placeholder={lang[language].gptSearchPlaceholder}></input>
        <button className='py-4 px-8 rounded bg-red-700 text-white' type='submit'>
          {lang[language].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchPage
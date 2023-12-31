import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  return (
    <>
      {movies && <div className='p-6'>
        <h1 className='text-3xl font-bold text-white mb-2'>{title}</h1>
        <div className='flex overflow-x-scroll  '>
          <div className='flex gap-5'>
            {movies.map((movie) => <MovieCard key={movie.id} item={movie} />)}
          </div>
        </div>
      </div>}
    </>
  )
}

export default MovieList;
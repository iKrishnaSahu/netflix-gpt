import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

  const [movie] = useSelector(store => store.movies?.nowPlayingMovies ?? [])
  if (!movie) {
    return;
  }

  const { original_title, overview, id } = movie;

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
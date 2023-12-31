import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector(store => store.movies?.trailerVideo);
  useTrailerVideo(movieId);

  const enableAutoplay = true;

  if (!trailer) return;

  return (
    <div>
      <iframe className='w-full aspect-video h-[100vh]'
        src={`https://www.youtube.com/embed/${trailer.key}?&controls=0&rel=0${enableAutoplay ? '&autoplay=1&mute=1' : ''}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoBackground;
import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerVideo from '../hooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector(store => store.movies?.trailerVideo);
  useTrailerVideo(movieId);

  const enableAutoplay = false;

  if (!trailer) return;

  return (
    <div>
      <iframe className='w-full aspect-video h-[100vh]'
        src={`https://www.youtube.com/embed/${trailer.key}${enableAutoplay ? '?&autoplay=1&mute=1' : ''}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}

export default VideoBackground;
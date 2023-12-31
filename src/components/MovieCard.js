import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ item }) => {
  return (
    <div className='w-48'>
      <img src={IMG_CDN + item.poster_path} alt='' />
    </div>
  )
}

export default MovieCard
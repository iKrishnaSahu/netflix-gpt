import React from 'react'

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className='h-screen absolute bg-gradient-to-t from-black'>
      <div className='p-8 flex flex-col gap-4 text-white mt-60'>
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='text-lg w-1/2'>{overview}</p>
        <div>
          <button className='bg-white hover:bg-opacity-80 transition-all text-black text-lg rounded-xl py-4 px-12'>▶️&nbsp;Play</button>
          &nbsp;
          <button className='bg-gray-800 bg-opacity-55 hover:bg-opacity-90 transition-all text-white text-lg rounded-xl py-4 px-12'>More Info</button>
        </div>
      </div>
    </div>
  )
}

export default VideoTitle;
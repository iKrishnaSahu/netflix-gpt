import React from 'react'
import GptSearchPage from './GptSearchPage'
import GptMovieSuggestion from './GptMovieSuggestion'

const GPTSearch = () => {
  return (
    <div>
      <div className='bg-cover h-full min-h-full overflow-hidden w-full absolute -z-10'>
        <img alt="background" className='min-h-full min-w-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <GptSearchPage />
      <GptMovieSuggestion />
    </div>
  )
}

export default GPTSearch
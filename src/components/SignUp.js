import React from 'react'
import Header from './Header'

const SignUp = () => {
    return (
        <div>
            <Header />
            <div className='bg-cover h-full min-h-full overflow-hidden w-full absolute -z-10'>
                <img alt="background" className='min-h-full min-w-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
            </div>
            <div className='absolute w-full h-full flex justify-center items-center'>
                <form className='p-14 bg-black bg-opacity-80 w-96'>
                    <h2 className='font-bold text-4xl text-white'>Sign In</h2>
                    <input type='text' placeholder='Email address' className='p-2 my-6 w-full rounded' />
                    <br />
                    <input type='password' placeholder='Password' className='p-2 my-4 w-full rounded' />
                    <br />
                    <button className='px-4 py-3 my-4 text-white bg-red-500 w-full rounded'>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
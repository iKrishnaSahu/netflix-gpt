import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useUser } from '../utils/useUser';

const Header = () => {

  const navigate = useNavigate();
  const user = useUser();

  const logoutUser = () => {
    signOut(auth);
    navigate('/');
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img className='w-52' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='Logo' />

      {user && <div className='flex items-center gap-5 text-white'>
        {/* <button>Search</button> */}
        <span className='flex items-center gap-2'>
          <img alt='user-icon' className='h-8' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg'></img>
          <span>{user.displayName}</span>
        </span>
        <button onClick={logoutUser}>Sign Out</button>
      </div>}

    </div>
  )
}

export default Header
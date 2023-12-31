import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useUser } from '../utils/useUser';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, USER_AVATAR } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate();
  const user = useUser();
  const dispatch = useDispatch();

  const logoutUser = () => {
    signOut(auth);
    navigate('/');
  }

  useEffect(() => {
    const authUnsubscription = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is authenticated
          const { uid, displayName, email } = user;
          dispatch(addUser({ uid, displayName, email }));
          navigate('/browse');
        } else {
          // User is signed out
          dispatch(removeUser());
          logoutUser();
        }
      }
    );

    return () => {
      // unsubscribe when component unmounts
      authUnsubscription();
    };
  }, []);

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between">
      <img className='w-52' src={LOGO_URL} alt='Logo' />

      {user && <div className='flex items-center gap-5 text-white'>
        {/* <button>Search</button> */}
        <span className='flex items-center gap-2'>
          <img alt='user-icon' className='h-8' src={USER_AVATAR}></img>
          <span>{user.displayName}</span>
        </span>
        <button onClick={logoutUser}>Sign Out</button>
      </div>}

    </div>
  )
}

export default Header
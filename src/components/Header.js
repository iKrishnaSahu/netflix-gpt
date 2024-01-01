import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useUser } from '../utils/useUser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LANGUAGES, LOGO_URL, USER_AVATAR } from '../utils/constants';
import { toggleShowGptSearchComponent } from '../utils/gptSlice';
import { updateLanguage } from '../utils/appConfigSlice';

const Header = () => {

  const navigate = useNavigate();
  const user = useUser();
  const dispatch = useDispatch();
  const language = useSelector(store => store.appConfig?.language);
  const showGptSearchComponent = useSelector(store => store.gpt.showGptSearchComponent);

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

  const handleGptSearchClick = () => {
    dispatch(toggleShowGptSearchComponent());
  }

  const languageChangeHandler = (event) => {
    dispatch(updateLanguage(event.target.value))
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black w-full flex justify-between z-10">
      <img className='w-52' src={LOGO_URL} alt='Logo' />

      {user && <div className='flex items-center gap-5 text-white'>
        {showGptSearchComponent && <select value={language} className="p-2 bg-transparent" onChange={languageChangeHandler}>
          {LANGUAGES.map(language => <option key={language.key} value={language.key}>{language.name}</option>)}
        </select>}
        <button className='py-2 px-4 m-2 bg-purple-900 rounded-sm hover:bg-purple-950' onClick={handleGptSearchClick}>
          {!showGptSearchComponent ? 'GPT Search' : 'Home Page'}
        </button>
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
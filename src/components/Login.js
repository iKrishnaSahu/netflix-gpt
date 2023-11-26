import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/vaildate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setShowSignUpForm(!showSignUpForm)
    setError(null);
  }

  const validate = () => {
    // validate
    const invalid = checkValidData(email.current.value, password.current.value);
    setError(invalid);
    if (invalid) return true;

    if (showSignUpForm) {
      // sign up flow
      const isNameValid = name.current.value.length >= 3;
      if (!isNameValid) {
        setError('Name must be at least 3 characters');
        return true;
      }
    }

    return false;
  }

  const buttonClickHandler = (e) => {
    e.preventDefault();
    setError(null);

    if (validate()) return;

    const emailText = email.current.value;
    const passwordText = password.current.value;

    if (showSignUpForm) {
      // sign up flow

      const nameText = name.current.value;

      // create an user
      createUserWithEmailAndPassword(auth, emailText, passwordText)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          // console.log('User craeted', user);

          // update display name
          updateProfile(user, { displayName: nameText }).then(() => {
            const { uid, displayName, email } = auth.currentUser;
            dispatch(addUser({ uid, displayName, email }))
            navigate('/browse');
          }).catch((error) => {
            setError(`${error.message} - ${error.code}`);
          });
        })
        .catch((error) => {
          setError(`${error.message} - ${error.code}`);
        });
    } else {
      // sign in flow

      signInWithEmailAndPassword(auth, emailText, passwordText)
        .then((userCredential) => {
          // Signed in 
          // const user = userCredential.user;
          // console.log('User logged in', user);
          navigate('/browse');
        })
        .catch((error) => {
          setError(`${error.message} - ${error.code}`);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className='bg-cover h-full min-h-full overflow-hidden w-full absolute -z-10'>
        <img alt="background" className='min-h-full min-w-full' src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <div className='absolute w-full h-full flex justify-center items-center'>
        <form className='p-14 bg-black bg-opacity-80 w-96'>
          <h2 className='font-bold text-4xl text-white'>
            {showSignUpForm ? 'Sign Up' : 'Sign In'}
          </h2>
          {showSignUpForm &&
            <input ref={name} type='text' placeholder='Name' className='p-2 my-4 w-full rounded text-white bg-gray-500' />
          }
          <input ref={email} type='text' placeholder='Email address' className='p-2 my-4 w-full rounded text-white bg-gray-500' />
          <input ref={password} type='password' placeholder='Password' className='p-2 my-4 w-full rounded text-white bg-gray-500' />
          <button className='px-4 py-3 my-4 text-white bg-red-500 w-full rounded' onClick={buttonClickHandler}>
            {showSignUpForm ? 'Sign Up' : 'Sign In'}
          </button>
          {error && <div className='text-red-500 text-lg font-bold my-2'>{error}</div>}
          {!showSignUpForm && <span className='text-white'>
            Already a Netflix user? &nbsp;
            <button className='text-blue-500' onClick={toggleSignInForm}>Sign In</button>
          </span>}
          {showSignUpForm && <span className='text-white'>
            Are your new to Netflix? &nbsp;
            <button className='text-blue-500' onClick={toggleSignInForm}>Sign up now</button>
          </span>}
        </form>
      </div>
    </div>
  )
}

export default Login;
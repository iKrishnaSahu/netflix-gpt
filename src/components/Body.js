import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {

  const dispatch = useDispatch();

  const appRouter = createBrowserRouter(
    [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/browse',
        element: <Browse />
      }
    ]
  );

  useEffect(() => {
    onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          // User is authenticated
          const { uid, displayName, email } = user;
          dispatch(addUser({ uid, displayName, email }));
        } else {
          // User is signed out
          dispatch(removeUser());
        }
      }
    );
  }, []);

  return (
    <RouterProvider router={appRouter}></RouterProvider>
  );
}

export default Body;

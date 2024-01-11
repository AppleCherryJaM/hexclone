import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/Root';
import HomePage from '../pages/Home';
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/session/new', element: <Login /> },
      { path: '/user/new', element: <Signup /> },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />
};

export default AppRoutes;

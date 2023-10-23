import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Homepage';
import Detail from './pages/Detail';
import AddListing from './pages/AddListing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import FourZeroFour from './pages/404';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        error: <FourZeroFour />,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: '/login',
                element: <Login />
            }, {
                path: '/signup',
                element: <Signup />
            }, {
                path: '/success',
                element: <Success />
            }, {
                path: '/addlisting',
                element: <AddListing/>
            },
            {
                path: '/vinyls/:id',
                element: <Detail />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
  
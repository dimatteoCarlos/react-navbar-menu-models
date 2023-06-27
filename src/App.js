import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage02';
import LayoutPage from './pages/LayoutPage';
import { HomePage } from './pages/HomePage';
import Applications from './components/Applications.jsx';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutPage />,
      errorElement: <ErrorPage />,
      children: [
        { element: <HomePage />, index: true },
        {
          path: '/:appId',
          element: <Applications />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

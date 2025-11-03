import { createBrowserRouter, RouterProvider as ReactRouterProvider } from 'react-router-dom';
import { RootLayout } from '@/layouts/RootLayout';
import { HomePage } from '@/features/home';
import { AboutPage } from '@/features/about';
import { NotFoundPage } from '@/features/home/components/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export const RouterProvider = () => <ReactRouterProvider router={router} />;

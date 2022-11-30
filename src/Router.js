import { Outlet, useRoutes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Games from './pages/Games/Games';
import GamesPlayed from './pages/Games/GamesPlayed';
import SelfPlay from './pages/Games/Play';
import LoginPage from './pages/Login';
import Notification from './pages/Notification';
import Point from './pages/points/Point';
import PointDetails from './pages/points/PointDetails';
import PointRedeemed from './pages/points/PointRedeemed';
import Profile from './pages/profile/Profile';
import UpdateProfile from './pages/profile/UpdateProfile';

function Router() {
  const element = useRoutes([
    {
      element: <MainLayout />,
      path: '/',
      children: [
        { path: 'dashboard', index: true, element: <Dashboard /> },
        { path: '/', element: <Dashboard /> },
     
        {
          path: 'games', element: <Outlet />, children: [
            { element: <Games />, index: true, },
            { element: <SelfPlay />, path: ":uid/play" },
          ]
        },
        { element: <GamesPlayed />, path: "played-games" },

        { path: 'points', element: <Point /> },
        { path: 'points-details', element: <PointDetails /> },
        { path: 'points-redeem', element: <PointRedeemed/> },
        { path: 'notifications', element: <Notification/> },
        {
          path: 'profile', element: <Outlet />, children: [
            { index: true, element: <Profile /> },
            { path: 'update', element: <UpdateProfile /> },

          ]
        },
        // {
        //   path: 'profile', element: <Outlet />, children: [
        //     { index: true, element: <Profile /> },
        //     { path: 'update', element: <UpdateProfile /> },

        //   ]
        // },
        // { path: 'point-history', element: <PointHistory /> },
        
      ],

    },
    { path: '/login', index: true, element: <LoginPage /> },


  ]);

  return element;
}
export default Router;

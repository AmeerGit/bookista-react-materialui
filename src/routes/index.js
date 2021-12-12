/* eslint-disable import/no-cycle */
import Catalogue from 'pages/catalogue';
import DashboardComponent from 'pages/dashboard';
import Homepage from 'pages/homepage';
import { useRoutes } from 'react-router-dom';
import Detail from 'pages/detail';

export default function NavigationRoutes() {
    return useRoutes([
        {
            path: '/',
            element: <DashboardComponent />,
            children: [
                { path: '/', element: <Homepage /> },
                { path: '/Books', element: <Catalogue /> },
                { path: '/Detail', element: <Detail /> }
            ]
        },
        {
            path: '/list',
            element: <Catalogue />
        }
    ]);
}

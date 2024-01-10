import { Suspense, lazy } from 'react';
import { RouteObject } from 'react-router';
import SuspenseLoader from './components/SuspenseLoader/SuspenseLoader';
import { Navigate } from 'react-router-dom';
import SidebarLayout from './layouts/SideBarLayout';


// ====== simple loader untill component is fully loaded ======
const Loader = (Component: any) => (props: any) =>
(
    <Suspense fallback={<SuspenseLoader />}>
        <Component {...props} />
    </Suspense>
);

// ===== Pages =====
const Login = Loader(lazy(() => import('./pages/Login/Login')));
const Dashboard = Loader(lazy(() => import('./pages/Dashboard/Dashboard')));
const Signup = Loader(lazy(() => import('./pages/Signup/Signup')));

const adminRoute: RouteObject[] = [
    {
        path:"",
        element:<SidebarLayout />,
        children: [
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '*',
                element: <Dashboard />
            },
        ]
    },
];

const nonAuthRoute: RouteObject[] = [
    {
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup to="/" />
            },
            {
                path: '*',
                element: <Login />
            },
            
        ]
    },
];

export {
    nonAuthRoute,
    adminRoute
}

import { Component } from "react";
import { lazy } from "react"; // Lazy loading, Loading a component only when it’s needed. use lazy() for pages/routes, 
// not tiny UI components — small components don’t need lazy loading.

const Welcome = lazy(() => import('../pages/protected/Welcome'))
const GetStarted = lazy(() => import('../pages/protected/GetStarted'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Questions = lazy(() => import("../pages/Questions"));
const Practice = lazy(() => import("../pages/Practice"));
const MockInterviews = lazy(() => import("../pages/MockInterviews"));
const Analytics = lazy(() => import("../pages/Analytics"));

var routes = [
    {
        path: '/get-started',
        component: GetStarted,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/questions',
        component: Questions,
    },
    {
        path: '/practice',
        component: Practice,
    },
    {
        path: '/mock-interviews',
        component: MockInterviews,
    },
    {
        path: '/analytics',
        component: Analytics,
    },
]

export default routes;
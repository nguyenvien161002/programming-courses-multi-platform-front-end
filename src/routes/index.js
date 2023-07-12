import { DefaultLayoutAdmin, DefaultLayoutAuth } from "~/admin/components/Layout";
import Auth from "~/admin/pages/Auth";
import Category from "~/admin/pages/Category";
import Courses from "~/admin/pages/Courses";
import Dashboard from "~/admin/pages/Dashboard";
import Documentation from "~/admin/pages/Documentation";
import Notification from "~/admin/pages/Notification";
import Orders from "~/admin/pages/Orders";
import Reports from "~/admin/pages/Reports";
import Settings from "~/admin/pages/Settings";
import Support from "~/admin/pages/Support";
import Users from "~/admin/pages/Users";
import Home from "~/client/pages/Home";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/signin', component: Auth, layout: DefaultLayoutAuth},
    { path: '/signup', component: Auth, layout: DefaultLayoutAuth},
    { path: '/admin/', component: Dashboard, layout: DefaultLayoutAdmin },
    { path: '/admin/courses', component: Courses, layout: DefaultLayoutAdmin },
    { path: '/admin/users', component: Users, layout: DefaultLayoutAdmin },
    { path: '/admin/orders', component: Orders, layout: DefaultLayoutAdmin },
    { path: '/admin/category', component: Category, layout: DefaultLayoutAdmin },
    { path: '/admin/reports', component: Reports, layout: DefaultLayoutAdmin },
    { path: '/admin/settings', component: Settings, layout: DefaultLayoutAdmin },
    { path: '/admin/support', component: Support, layout: DefaultLayoutAdmin },
    { path: '/admin/documentation', component: Documentation, layout: DefaultLayoutAdmin },
    { path: '/admin/notification', component: Notification, layout: DefaultLayoutAdmin },
    { path: '/admin/dashboard/goals', component: Dashboard, layout: DefaultLayoutAdmin },
    { path: '/admin/dashboard/revenue', component: Dashboard, layout: DefaultLayoutAdmin },
]

const privateRoutes = [ 
    
]

export { publicRoutes, privateRoutes }
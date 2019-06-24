import{
    Home,
    Users,
    Login,
    NotFound,
    BManagement
} from 'views'

export const mainRoute = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    }
]

export const pageRoute = [
    {
        pathname: '/home',
        component: Home
    },
    {
        pathname: '/users',
        component: Users
    },
    {
        pathname: '/bmanagement',
        component: BManagement
    },
    {
        pathname: '/users',
        component: Users
    }
]
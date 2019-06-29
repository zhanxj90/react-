import{
    Home,
    Teach,
    Login,
    NotFound,
    Student,
    Users1,
    Users2,
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
        pathname: '/admin/home',
        component: Home,
        title:"首页",
        icon:"home"
    },
    {
        pathname: '/admin/teach',
        component: Teach,
        title:"员工管理",
        icon:"home"
    },
    {
        pathname: '/admin/student',
        title:"学员管理",
        icon:"user",
        component: Student,
        children:[
            {
                title:"学员列表",
                pathname:"/admin/student/users1",
                component: Users1,
            },
            {
                title:"学员权限",
                pathname:"/admin/student/users2",
                component: Users2,
            }
        ]
    }
]
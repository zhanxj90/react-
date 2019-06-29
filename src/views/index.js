import Loadable from 'react-loadable';
import Loading from "common/loading"

const Home = Loadable({
    loader: ()=> import('./home'),
    loading: Loading,
})

const Login = Loadable({
    loader: ()=> import('./login'),
    loading: Loading,
})

const Student = Loadable({
    loader: ()=> import('./student'),
    loading: Loading,
})

const Users1 = Loadable({
    loader: ()=> import('components/users1'),
    loading: Loading,
})

const Users2 = Loadable({
    loader: ()=> import('components/users2'),
    loading: Loading,
})

const NotFound = Loadable({
    loader: ()=> import('./notFound'),
    loading: Loading,
})
const Teach = Loadable({
    loader: ()=> import('./teach'),
    loading: Loading,
})

export {
    Home,
    Login,
    NotFound,
    Student,
    Users1,
    Users2,
    Teach
}
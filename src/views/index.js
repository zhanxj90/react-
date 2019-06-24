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

const Users = Loadable({
    loader: ()=> import('./users'),
    loading: Loading,
})

const NotFound = Loadable({
    loader: ()=> import('./notFound'),
    loading: Loading,
})
const BManagement = Loadable({
    loader: ()=> import('./BManagement'),
    loading: Loading,
})

export {
    Home,
    Login,
    NotFound,
    Users,
    BManagement
}
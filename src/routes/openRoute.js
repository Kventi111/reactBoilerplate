import MainPage from '../application'
import Auth from '../containers/auth'

export const openRoute = [
  {
    exact: true,
    path: '/',
    title: 'Главная',
    component: MainPage,
    service: null,
  },
  {
    exact: true,
    path: '/login',
    title: '',
    component: Auth,
    service: null,
  },
];

export default openRoute;

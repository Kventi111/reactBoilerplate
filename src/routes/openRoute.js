import MainPage from '../application'
import HomePage from '../containers/main'


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
    path: '/home',
    title: 'Домашняя',
    component: HomePage,
    service: null,
  },
  {
    path: '*',
    component: ''
  }
];

export default openRoute;

import MainPage from '../containers/mainPage'

export const openRoute = [
  {
    exact: true,
    path: '/',
    title: 'Главная',
    component: MainPage,
    service: null,
  },
  {
    path: '*',
    component: ''
  }
];

export default openRoute;

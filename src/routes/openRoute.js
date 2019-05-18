import MainPage from '../containers/mainPage'
import Questionary from '../containers/questionnaire'

export const openRoute = [
  {
    exact: true,
    path: '/',
    title: 'Главная',
    component: MainPage,
  },
  {
    exact: true,
    path: '/questionary',
    title: 'Опросник',
    component: Questionary,
  },
  {
    path: '*',
    component: ''
  }
];

export default openRoute;

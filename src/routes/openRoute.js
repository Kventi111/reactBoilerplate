import MainPage from '../application'
import Chat from '../containers/chat'


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
    path: '/chat',
    title: 'Чат',
    component: Chat,
    service: null,
  },
  {
    path: '*',
    component: ''
  }
];

export default openRoute;

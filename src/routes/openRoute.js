import MainPage from '../application'
import Chat from '../containers/chat'
import Auth from '../containers/auth'


export const openRoute = [
  {
    exact: true,
    path: '/',
    title: 'Главная',
    component: Auth,
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

import Chat from '../containers/chat'

// TODO - Сделать компонент не найденной страницы
export const secureRoutes = [
  {
    exact: true,
    path: '/chat',
    title: 'Чат',
    component: Chat,
    service: null,
  },
  {
    path: '*',
    component: () => 'page not found'
  }
];

export default secureRoutes;

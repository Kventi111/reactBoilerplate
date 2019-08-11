import { fromJS } from 'immutable'
import { ACTIONS } from './constants'

const initialState = fromJS({
  mount : false,
  loading : true,
  error : false,
  currentDialogId: null,
  dialogList : [
    {
      avatar : {
        imgScr : 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg',
        online : true,
        size : "S",
        border: false
      },
      username : 'Donald Tramp',
      lastMessage : 'I win!!!',
      isActive : false
    },
    {
      avatar : {
        imgScr : 'https://anekdotsuper.ru/assets/cache_image/assets/image/fon/dets-1_250x200_a11.jpg',
        online : false,
        size : "S",
        border: false
      },
      username : 'Веселый Колобоко',
      lastMessage : 'Привет, пойдем катиться ?',
      isActive : false
    },
    {
      avatar : {
        imgScr : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyLpMInAPlGRjrVIYNY3sgAB1m4CMmieynn8FPJeq_BwSLxcO',
        online : true,
        size : "S",
        border: false
      },
      username : 'Нарко Ромашка',
      lastMessage : 'Есть че ?',
      isActive : false
    },
    {
      avatar : {
        imgScr : 'http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg',
        online : false,
        size : "S",
        border: false
      },
      username : 'Кунгфу Панда',
      lastMessage : 'Ты был сегодня на тренировках  ?',
      isActive : false
    },
    {
      avatar : {
        imgScr : 'https://avatars.mds.yandex.net/get-pdb/777813/253f237e-33a3-42e2-91a3-2ce97f940d52/s1200',
        online : true,
        size : "S",
        border: false
      },
      username : 'Милый Котя',
      lastMessage : 'Мррррррррр.....',
      isActive : false
    },
    {
      avatar : {
        imgScr : 'https://avatars.mds.yandex.net/get-pdb/1707672/b8a63528-ae60-492f-a89d-3b5be6c1c2b3/s1200',
        online : false,
        size : "S",
        border: false
      },
      username : 'Хитрая Лисичка',
      lastMessage : 'Ну..... не знаю',
      isActive : false
    },
    {
      avatar : {
        imgScr : '',
        online : false,
        size : "S",
        border: false
      },
      username : 'Анонимный Аноним',
      lastMessage : 'Ееее.... пошли выскочим да!!!1',
      isActive : false
    }
  ]
})

export const mount = state => state.merge({
  mount : true,
  loading : false
})

export const unmount = state => state.merge({
  mount : false
})

export const setCurrentDialog = (state,id) => state.merge({
  currentDialogId : id
})

export default function chatContainerReducer(state = initialState,{type,payload}) {
  switch (type) {
    case ACTIONS.CHAT_CONTAINER_MOUNT_SUCCESS:
      return mount(state) 
    case ACTIONS.SET_CURRENT_DIALOG:
      return setCurrentDialog(state,payload)
    default:
      return state;
  }
}
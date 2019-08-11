import { fromJS } from 'immutable'
import { ACTIONS } from './constants'

const initialApp = fromJS({
  version : '',
  hasError : false,
  hasErrorMessage : '',
  loader :  false,
  userInfo : {
    username : 'kventin',
    location: { city : 'Moscow', country : 'Russia' },
    img : ''
  },
  dialogList : [
      {
        avatar : {
          imgScr : 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg',
          online : true,
          size : "S",
          border: false
        },
        username : 'Donald Tramp',
        lastMessage : 'I win!!!'
      },
      {
        avatar : {
          imgScr : 'https://anekdotsuper.ru/assets/cache_image/assets/image/fon/dets-1_250x200_a11.jpg',
          online : false,
          size : "S",
          border: false
        },
        username : 'Веселый Колобоко',
        lastMessage : 'Привет, пойдем катиться ?'
      },
      {
        avatar : {
          imgScr : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyLpMInAPlGRjrVIYNY3sgAB1m4CMmieynn8FPJeq_BwSLxcO',
          online : true,
          size : "S",
          border: false
        },
        username : 'Нарко Ромашка',
        lastMessage : 'Есть че ?'
      },
      {
        avatar : {
          imgScr : 'http://www.radionetplus.ru/uploads/posts/2013-05/1369460621_panda-26.jpg',
          online : false,
          size : "S",
          border: false
        },
        username : 'Кунгфу Панда',
        lastMessage : 'Ты был сегодня на тренировках  ?'
      },
      {
        avatar : {
          imgScr : 'https://avatars.mds.yandex.net/get-pdb/777813/253f237e-33a3-42e2-91a3-2ce97f940d52/s1200',
          online : true,
          size : "S",
          border: false
        },
        username : 'Милый Котя',
        lastMessage : 'Мррррррррр.....'
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
      }
    ]
})

export const appInit = state => state.merge({
  loader : true
})

export const appInitSuccess = state => state.merge({
  version : '1',
  hasError : false,
  hasErrorMessage : '',
  loader :  false
})

export const appInitFail = state => state.merge({
  version : '1',
  hasError : false,
  hasErrorMessage : '',
  loader :  false
})

export default function Application(state = initialApp, action) {
  switch (action.type) {
    case ACTIONS.APP_INIT:
      return appInit(state)
    default:
      return state
  }
}
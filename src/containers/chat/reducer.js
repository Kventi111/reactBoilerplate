import { fromJS } from 'immutable'
import { ACTIONS } from './constants'

const initialDialogState = fromJS([
    {
      id : 1,
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
      id : 2,
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
      id : 3,
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
      id : 4,
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
      id : 5,
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
      id : 6,
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
      id : 7,
      avatar : {
        imgScr : '',
        online : false,
        size : "S",
        border: false
      },
      username : 'Анонимный Аноним',
      lastMessage : 'Ееее.... пошли выскочим да!!!1',
    },
    {
      id : 8,
      avatar : {
        imgScr : '',
        online : false,
        size : "S",
        border: false
      },
      username : 'Анонимный Аноним',
      lastMessage : 'Ееее.... пошли выскочим да!!!1',
    },
    {
      id : 9,
      avatar : {
        imgScr : '',
        online : false,
        size : "S",
        border: false
      },
      username : 'Анонимный Аноним',
      lastMessage : 'Ееее.... пошли выскочим да!!!1',
    },
    {
      id : 10,
      avatar : {
        imgScr : '',
        online : false,
        size : "S",
        border: false
      },
      username : 'Анонимный Аноним',
      lastMessage : 'Ееее.... пошли выскочим да!!!1',
    },
  ])

const initialMessageState = fromJS([
    {
      id : 1,
      reciever : 'Donald Tramp',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '12333123',
          text : 'tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '1123123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kv33entin',
          text : '12312ajskl djkasdjaklsj dkasdl;sakl;kasldkasld klaksdajskdjaskldaslkjdka sjdklajskdj aklsdjlk3'
        }, 
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'gdhxcvdgh1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '12333123',
          text : 'tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean vel'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '1123123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kv33entin',
          text : '12312ajskl djkasdjaklsj dkasdl;sakl;kasldkasld klaksdajskdjaskldaslkjdka sjdklajskdj aklsdjlk3'
        }, 
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'gdhxcvdgh1'
        }
      ]
    },
    {
      id : 2,
      author : '',
      reciever : 'Веселый Колобоко',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '13323123',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kv33entin',
          text : '1123123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kventin',
          text : 'xcvxc333v1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'gdhxcvdgh1'
        }
      ]
    },
    {
      id : 3,
      author : '',
      reciever : 'Нарко Ромашка',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '13323123',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '1123123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kventin',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123333123',
          text : 'gdhxcvdgh1'
        }
      ]
    },
    {
      id : 4,
      author : '',
      reciever : 'Кунгфу Панда',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '1123333123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kventin',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'gdhxcvdgh1'
        }
      ]
    },
    {
      id : 5,
      author : '',
      reciever : 'Милый Котя',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '1123123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kventin',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'gdhxcv333dgh1'
        }
      ]
    },
    {
      id : 2,
      author : '',
      reciever : 'Хитрая Лисичка',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '1123123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kventin',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'gdhxcvdgh1'
        }
      ]
    },
    {
      id : 6,
      author : '',
      reciever : 'Анонимный Аноним',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'xcvx12312p312cv1'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '1123123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kventin',
          text : 'xcvxc12kl3k;213v1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'gdhxcvdgh1'
        }
      ]
    },
    {
      id : 7,
      author : '',
      reciever : 'Анонимный Аноним',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '112m123,.123123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kventin',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'gdhxcvdgh1'
        }
      ]
    },
    {
      id : 8,
      author : '',
      reciever : 'Анонимный Аноним',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '1123k123l123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kventin',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '12312ajskldjkasdjaklsjdkasdl;sakl;kasldkasldklaksdajskdjaskldaslkjdkasjdklajskdjaklsdjlk3',
          text : 'gdhxcvdgh1'
        }
      ]
    },
    {
      id : 9,
      author : '',
      reciever : 'Анонимный Аноним',
      list : [
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'xcvxc33v1'
        },
        {
          id : 1123,
          author : '123123',
          reciever : 'Kventin',
          text : '1123123'
        },
        {
          id : 1123,
          author : '123213',
          reciever : 'Kventin',
          text : 'xcvxcv1'
        },
        {
          id : 1123,
          author : 'Kventin',
          reciever : '123123',
          text : 'gdhxcv33dgh1'
        }
      ]
    },
  ])

const initialState = fromJS({
  mount : false,
  loading : true,
  error : false,
  currentDialogId: null,
  dialogs : initialDialogState,
  messages : initialMessageState
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
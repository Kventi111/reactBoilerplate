import React, { Component } from 'react'
import Item from '../item'

import {
  DialogList
} from '../../style'

const fakeUserData = [
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
]


export default class List extends Component {
  render() {
    const { setCurrentDialog } = this.props;
    return (
      <DialogList>
        {fakeUserData.map(item => 
          <Item 
            setCurrentDialog={setCurrentDialog}
            key={item.id} 
            id={item.id} 
            avatar={item.avatar} 
            username={item.username} 
            lastMessage={item.lastMessage} 
          />
        )}
      </DialogList>
    )
  }
}

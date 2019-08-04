import React, { Component } from 'react'
import {
  HeaderWrapper,
  UserInfo,
  UserName,
  UserLastMessage
} from  '../../style';
import Avatar from 'components/global/avatar'

const fakeUserData = {
    avatar : {
      imgScr : 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg',
      online : true,
      size : "S",
      border: false
    },
    username : 'Donald Tramp',
    lastMessage : 'typing....'
}


export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Avatar {...fakeUserData.avatar} />
        <UserInfo>
          <UserName>{fakeUserData.username}</UserName>
          <UserLastMessage>{fakeUserData.lastMessage}</UserLastMessage>
        </UserInfo>
      </HeaderWrapper>
    )
  }
}

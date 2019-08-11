import React, { Component } from 'react'
import {
  HeaderWrapper,
  UserInfo,
  UserName,
  UserLastMessage
} from  '../../style';
import Avatar from 'components/global/avatar'

const fakeUserData = {
    imgScr : 'https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg',
    online : true,
    size : "S",
    border: false,
    lastMessage : 'typing..'
}


export default class Header extends Component {
  render() {
    const { messagesName } = this.props;
    return (
      <HeaderWrapper>
        <Avatar {...fakeUserData} username />
        <UserInfo>
          <UserName>{messagesName}</UserName>
          <UserLastMessage>{fakeUserData.lastMessage}</UserLastMessage>
        </UserInfo>
      </HeaderWrapper>
    )
  }
}

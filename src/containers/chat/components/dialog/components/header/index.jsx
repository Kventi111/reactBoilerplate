import React, { Component } from 'react'
import {
  HeaderWrapper,
  UserInfo,
  UserName,
  UserLastMessage
} from  '../../style';
import Avatar from 'components/global/avatar'
export default class Header extends Component {
  render() {
    const { messagesName,currentAvatar } = this.props;
    return (
      <HeaderWrapper>
        <Avatar {...currentAvatar} />
        <UserInfo>
          <UserName>{messagesName}</UserName>
          <UserLastMessage>{''}</UserLastMessage>
        </UserInfo>
      </HeaderWrapper>
    )
  }
}

import React, { Component } from 'react'
import { APP } from 'application/constants'

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
    {APP.RENDER_LOG && console.count('Dialog Header')}   // eslint-disable-line no-lone-blocks

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

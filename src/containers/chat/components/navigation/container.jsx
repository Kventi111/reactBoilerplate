import React, { Component } from 'react'
import List from './components/list'

import {
  Wrapper,
  Avatar,
  AvatarImg,
  AvatarNickname,
  AvatarLocation,
  AvatarStatus,
  AvatarOnlineStatusCircle
} from './style'

export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      onlineStatus : true
    }
  }

  render() {
    const { onlineStatus } = this.state
    return (
      <Wrapper>
        <Avatar>
          <AvatarImg>
            <AvatarStatus online={onlineStatus} />
            <AvatarOnlineStatusCircle online={onlineStatus} />
          </AvatarImg>
          <AvatarNickname>Kventin</AvatarNickname>
          <AvatarLocation>Russia,Moscow</AvatarLocation>
        </Avatar>
        <List />
      </Wrapper>
    )
  }
}

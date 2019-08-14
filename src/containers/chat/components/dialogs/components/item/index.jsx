import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Avatar from 'components/global/avatar'
import { APP } from 'application/constants'


import {
  DialogItem,
  UserInfo,
  UserName,
  UserLastMessage,
  DialogItemActive
} from '../../style'

class Item extends Component {
  static propTypes = {
    avatar : PropTypes.object,
    username : PropTypes.string,
    lastMessage : PropTypes.string
  }

  static defaultProps = {
    active : false
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.active === this.props.active) return false

    return true
  }

  render()  { 
    const {
      avatar,
      username,
      lastMessage,
      id,
      setCurrentDialog,
      active
    } = this.props
    {APP.RENDER_LOG && console.count('Dialogs Item')}   // eslint-disable-line no-lone-blocks

    return (
      <DialogItem onClick={() => setCurrentDialog(id)}>
        <Avatar {...avatar} />
        <UserInfo>
          <UserName>{username}</UserName>
          <UserLastMessage>{lastMessage}</UserLastMessage>
        </UserInfo>
        <DialogItemActive selected={active} />
      </DialogItem>
    )
  }
}

export default Item
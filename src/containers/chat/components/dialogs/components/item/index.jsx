import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'components/global/avatar'


import {
  DialogItem,
  UserInfo,
  UserName,
  UserLastMessage
} from '../../style'

export const Item = ({
  avatar,
  username,
  lastMessage
}) => (
  <DialogItem>
    <Avatar {...avatar} />
    <UserInfo>
      <UserName>{username}</UserName>
      <UserLastMessage>{lastMessage}</UserLastMessage>
    </UserInfo>
  </DialogItem>
);

Item.propTypes = {
  avatar : PropTypes.object,
  username : PropTypes.string,
  lastMessage : PropTypes.string
}

export default Item
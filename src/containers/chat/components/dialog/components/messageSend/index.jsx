import React, { Component } from 'react'
import {
  MessageSenderWrapper,
  MessageSenderInput
} from '../../style'


export default class MessageSender extends Component {
  render() {
    return (
      <div>
        <MessageSenderWrapper>
          <MessageSenderInput onChange={(e) => console.log(e.target.value)} placeholder="type some text" />
        </MessageSenderWrapper>
      </div>
    )
  }
}

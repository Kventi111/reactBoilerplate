import React, { Component } from 'react'
import { APP } from 'application/constants'

import {
  MessageSenderWrapper,
  MessageSenderInput
} from '../../style'


export default class MessageSender extends Component {

  onChangeHandler(e) {
    console.log(e.target.value)
  }

  render() {
    {APP.RENDER_LOG && console.count('MessageSender')}   // eslint-disable-line no-lone-blocks

    return (
      <div>
        <MessageSenderWrapper>
          <MessageSenderInput onChange={this.onChangeHandler} placeholder="type some text" />
        </MessageSenderWrapper>
      </div>
    )
  }
}

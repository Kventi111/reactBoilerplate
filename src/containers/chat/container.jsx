import React, { Component } from 'react'
import Dialogs from './components/dialogs';
import Dialog from './components/dialog';
import { APP } from 'application/constants'

import {
  Wrapper
} from './style'

export default class Chat extends Component {
  render() {
    {APP.RENDER_LOG && console.count('Chat')}   // eslint-disable-line no-lone-blocks

    const {
      setCurrentDialog,
      dialogs,
      currentMessages,
      currentDialogAvatar
    } = this.props;

    return (
     <Wrapper>
        <Dialogs dialogs={dialogs} setCurrentDialog={setCurrentDialog} />
        <Dialog currentAvatar={currentDialogAvatar} messages={currentMessages} />
     </Wrapper>
    );
  }
};

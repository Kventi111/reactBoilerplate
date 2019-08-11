import React, { Component } from 'react'
import Dialogs from './components/dialogs';
import Dialog from './components/dialog';

import {
  Wrapper
} from './style'

export default class Chat extends Component {
  render() {
    const {
      setCurrentDialog,
      dialogs,
      currentMessages
    } = this.props;
    
    return (
     <Wrapper>
        <Dialogs dialogs={dialogs} setCurrentDialog={setCurrentDialog} />
        <Dialog  messages={currentMessages} />
     </Wrapper>
    );
  }
};

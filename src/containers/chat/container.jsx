import React, { Component } from 'react'
import Navigation from './components/navigation';
import Dialogs from './components/dialogs';
import Dialog from './components/dialog';

import {
  Wrapper
} from './style'

export default class Chat extends Component {
  render() {
    return (
     <Wrapper>
        <Navigation />
        <Dialogs />
        <Dialog />
     </Wrapper>
    );
  }
};

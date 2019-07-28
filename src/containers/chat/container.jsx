import React, { Component } from 'react'
import Navigation from './components/navigation';
import Dialogs from './components/dialogs'

import {
  Wrapper
} from './style'

export default class Chat extends Component {
  render() {
    return (
     <Wrapper>
        <Navigation />
        <Dialogs />
     </Wrapper>
    );
  }
};
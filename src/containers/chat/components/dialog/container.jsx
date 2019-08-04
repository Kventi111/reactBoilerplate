import React, { Component } from 'react'
import Header from './components/header';
import {
  DialogWrapper,
  MessageItem,
  MessageUserName,
  MessageText,
  DialogDate
} from './style';

export default class Dialog extends Component {
  render() {
    return (
      <div>
         <Header />
         <DialogWrapper>
           <DialogDate>today</DialogDate>
           <MessageItem>
             <MessageUserName>Donald Tramp</MessageUserName>
             <MessageText>Привет</MessageText>
           </MessageItem>
           <MessageItem>
             <MessageUserName>kventin</MessageUserName>
             <MessageText>Привет ))</MessageText>
           </MessageItem>
           <MessageItem>
             <MessageUserName>Donald Tramp</MessageUserName>
             <MessageText>Как дела ?</MessageText>
           </MessageItem>
         </DialogWrapper>
      </div>
    )
  }
}

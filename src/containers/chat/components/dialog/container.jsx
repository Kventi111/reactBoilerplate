import React, { Component } from 'react'
import Header from './components/header';
import MessageSender from './components/messageSend';
import {
  DialogWrapper,
  DialogDate,
  MessageWrapper,
  MessageItem,
  MessageUserName,
  MessageText,
  MessageList
} from './style';

export default class Dialog extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div>
         <Header messagesName={messages.reciever} />
         <DialogWrapper>
          <DialogDate>today</DialogDate>
          <MessageList>
          {messages.list ? messages.list.map((mes,index) => (
              <MessageWrapper key={index} me={mes.author === 'Kventin'}>
              <MessageItem me={mes.author === 'Kventin'}>
                <MessageUserName>
                  {mes.author}
                </MessageUserName>
                <MessageText>
                  {mes.text}
                </MessageText>
              </MessageItem>
            </MessageWrapper>
          )) : 'Выбери диалог ленвая ТВАРЬ!!!!!!'}
          </ MessageList>
          <MessageSender />
         </DialogWrapper>
      </div>
    )
  }
}

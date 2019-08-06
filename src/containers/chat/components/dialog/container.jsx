import React, { Component } from 'react'
import Header from './components/header';
import {
  DialogWrapper,
  DialogDate,
  MessageWrapper,
  MessageItem,
  MessageUserName,
  MessageText
} from './style';

export default class Dialog extends Component {
  render() {
    return (
      <div>
         <Header />
         <DialogWrapper>
          <DialogDate>today</DialogDate>
          <MessageWrapper me={true}>
            <MessageItem me={true}>
              <MessageUserName>
                Kventin
              </MessageUserName>
              <MessageText>
                Привет
              </MessageText>
            </MessageItem>
          </MessageWrapper>
          <MessageWrapper>
            <MessageItem>
              <MessageUserName>
                Donald Tramp
              </MessageUserName>
              <MessageText>
                Йоу бро салам есть ЖИ!
              </MessageText>
            </MessageItem>
          </MessageWrapper>
          <MessageWrapper>
            <MessageItem>
              <MessageUserName>
                Donald Tramp
              </MessageUserName>
              <MessageText>
                Все чики пуки сам как ?
              </MessageText>
            </MessageItem>
          </MessageWrapper>
          <MessageWrapper me={true}>
            <MessageItem me={true}>
              <MessageUserName>
                kventin
              </MessageUserName>
              <MessageText>
                да ниче вот в америку сорбался
              </MessageText>
            </MessageItem>
          </MessageWrapper>
          <MessageWrapper me={true}>
            <MessageItem me={true}>
              <MessageUserName>
                kventin
              </MessageUserName>
              <MessageText>
                местечко организуешь в белом доме ?
              </MessageText>
            </MessageItem>
          </MessageWrapper>
         </DialogWrapper>
      </div>
    )
  }
}

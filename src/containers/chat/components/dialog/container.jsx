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
    return (
      <div>
         <Header />
         <DialogWrapper>
          <DialogDate>today</DialogDate>
          <MessageList>
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
                Kventin
              </MessageUserName>
              <MessageText>
                Привет
              </MessageText>
            </MessageItem>
          </MessageWrapper>
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
          </ MessageList>
          <MessageSender />
         </DialogWrapper>
      </div>
    )
  }
}

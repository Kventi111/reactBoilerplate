import React, { Component, Fragment } from "react";
import Header from "./components/header";
import MessageSender from "./components/messageSend";
import Empty from "./components/emptyDialog";
import {
  DialogWrapper,
  DialogDate,
  MessageWrapper,
  MessageItem,
  MessageText,
  MessageList
} from "./style";

export default class Dialog extends Component {
  render() {
    const { messages, currentAvatar } = this.props;
    return (
      <div>
        {!messages.list ? 
          <Empty />
          : 
          <Fragment>
            <Header
              currentAvatar={currentAvatar}
              messagesName={messages.reciever}
            />
            <DialogWrapper>
              <DialogDate>today</DialogDate>
              <MessageList>
                {messages.list.map((mes, index) => (
                  <MessageWrapper key={index} me={mes.author === "Kventin"}>
                    <MessageItem me={mes.author === "Kventin"}>
                      <MessageText>{mes.text}</MessageText>
                    </MessageItem>
                  </MessageWrapper>
                ))}
              </MessageList>
              <MessageSender />
            </DialogWrapper>
          </Fragment>
        }
      </div>
    );
  }
}

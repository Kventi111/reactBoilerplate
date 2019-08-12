import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 80px;
  width: 500px;
  display: flex;
  background: #FFFFFF;
  padding: 0 24px;
`;

export const UserInfo = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
`;

export const UserName = styled.p`
  font-weight: bold;
`;

export const UserLastMessage = styled.p`
  font-size: 12px;
  color: #363636;
`;

export const DialogWrapper = styled.div`
  background: #EAF3F5;
  height: 100%;
  position: relative;
  max-height: 518px;
  max-width: 500px;
`;

export const DialogDate = styled.div`
  font-size: 12px;
  color: #000;
  opacity: 0.64;
  width: 100%;
  text-align: center;
  padding: 10px 0;
`;

export const MessageList  = styled.div`
  max-height: 404px;
  overflow: scroll;
`;


export const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.me ? 'flex-end' : 'flex-start')};
`;


export const MessageItem = styled.div`
  padding:  10px 24px;
  margin: 0 0 10px 0;
  max-width: 50%;
  background-color: ${props => (props.me ? 'white' : '#D9E1E9')};
  border-bottom-left-radius: ${props => (props.me ? '5px' : '0')};
  border-top-left-radius: ${props => (props.me ? '5px' : '0')};
  border-bottom-right-radius: ${props => (props.me ? '0' : '5px')};
  border-top-right-radius: ${props => (props.me ? '0' : '5px')};
`;

export const MessageUserName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const MessageText = styled.div`
  font-size: 12px;
  font-weight: 500;
`;


export const MessageSenderWrapper = styled.div`
  padding: 10px 20px; 
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const MessageSenderInput = styled.textarea`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  background: #fff;
  resize: none;
`;
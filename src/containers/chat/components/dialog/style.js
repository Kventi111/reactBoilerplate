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
`;

export const DialogDate = styled.div`
  font-size: 12px;
  color: #000;
  opacity: 0.64;
  width: 100%;
  text-align: center;
  padding: 10px 0;
`;

export const MessageWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.me ? 'flex-end' : 'flex-start')};
`;

export const MessageItem = styled.div`
  padding:  10px 24px;
  background-color: ${props => (props.me ? 'white' : '#D9E1E9')};
  border-bottom-left-radius: ${props => (props.me ? '5px' : '0')};
  border-top-left-radius: ${props => (props.me ? '5px' : '0')};
  border-bottom-right-radius: ${props => (props.me ? '0' : '5px')};
  border-top-right-radius: ${props => (props.me ? '0' : '5px')};
`;

export const MessageUserName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const MessageText = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
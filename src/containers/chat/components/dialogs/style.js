import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  background-color: rgba(221,240,239);
`;

export const SearchWrapper = styled.div`
  background: #F4FDF9;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: 1px solid #D0EBCA;
  padding: 0 10px;
  height: 30px;
  width: 250px;
  outline: none;
  border-radius: 30px;
`;

export const DialogList = styled.div`
  padding: 10px;
  display: flex;
  overflow: scroll;
  max-height: 600px;
  flex-direction: column;
`;

export const DialogItem = styled.div`
  background: #fff;
  padding: 10px;
  display: flex;
  margin: 5px 0;
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
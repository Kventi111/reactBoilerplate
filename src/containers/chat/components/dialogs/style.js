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
  cursor: pointer;
  transition: background-color .4s;
  position: relative;
  &:hover {
    background-color: #c3c3c3;
  }
`;

export const DialogItemActive = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background: ${props => (props.selected ? '#008000' : 'gray')};
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
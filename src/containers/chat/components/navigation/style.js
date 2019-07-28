import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 180px;
  background: #fff;
  min-height: 100vh;
`;

export const ListItem = styled.div`
  padding: 10px 24px;
  transition: background 1s;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  &:hover {
    background: rgba(170,205,188);
  };
`;

export const ListItemIcon = styled.span``;


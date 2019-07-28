import styled from 'styled-components';


export const Wrapper = styled.div`
  width: 180px;
  background: #fff;
  min-height: 100vh;
`;

export const Avatar = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AvatarImg = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-image: url('https://pp.userapi.com/c847217/v847217709/1c7a32/yuwN1Pf26Q4.jpg');
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const AvatarStatus = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: absolute;
  border: 3px solid ${props => props.online ? 'green' : 'gray'};
`;

export const AvatarOnlineStatusCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.online ? 'green' : 'gray'};
  position: absolute;
  bottom: -5px;
  left: 45%;
`;

export const AvatarNickname = styled.div`
  margin: 10px 0 0 0;
  font-weight: bold;
`;

export const AvatarLocation = styled.div`
  margin: 5px 0 0 0;
  font-size: 12px;
  color: #363636;
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


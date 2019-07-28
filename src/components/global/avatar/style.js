import styled from 'styled-components'


const avatarSise = {
  S : { w : '40px', h : '40px' },
  M : { w : '60px', h : '60px' },
  L : { w : '80px', h : '80px' }
};


export const Wrapper = styled.div`
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.div`
  width: ${({size}) => {
    console.log(avatarSise.size);
    console.log(size);
  }};
  height: ${({size}) => avatarSise.size.h};
  border-radius: 50%;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const OnlineStatusBorder = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  position: absolute;
  border: 3px solid ${props => props.online ? 'green' : 'gray'};
`;

export const OnlineStatusCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${props => props.online ? 'green' : 'gray'};
  position: absolute;
  bottom: -5px;
  left: 45%;
`;

export const Nickname = styled.div`
  margin: 10px 0 0 0;
  font-weight: bold;
`;

export const Location = styled.div`
  margin: 5px 0 0 0;
  font-size: 12px;
  color: #363636;
`;
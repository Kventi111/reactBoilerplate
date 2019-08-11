import styled from 'styled-components'
import { SIZE_W, SIZE_H } from './constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.div`
  width: ${props => SIZE_W[props.size]}px;
  height: ${props => SIZE_H[props.size]}px;
  border-radius: 50%;
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  background-color: ${props => props.src ? 'transparent' : 'gray'};
  position: relative;
`;

export const OnlineStatusBorder = styled.div`
  width: ${props => SIZE_W[props.size]}px;
  height: ${props => SIZE_H[props.size]}px;
  border-radius: 50%;
  position: absolute;
  border: 3px solid ${props => props.online ? 'green' : 'gray'};
`;

export const OnlineStatusCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: .5px solid white;
  background: ${props => props.online ? 'green' : 'gray'};
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translate(-50%,0);
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
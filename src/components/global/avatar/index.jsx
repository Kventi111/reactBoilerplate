import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {
  Wrapper,
  Img,
  Nickname,
  Location,
  OnlineStatusBorder,
  OnlineStatusCircle
} from './style'

export default class Avatar extends Component {
  static propTypes = {
    imgScr : PropTypes.string,
    status : PropTypes.bool,
    size: PropTypes.oneOf(['S',"M","L"]),
    username : PropTypes.string,
    location : PropTypes.string,
    border : PropTypes.bool,
  }

  static defaultProps = {
    username : '',
    imgScr : '',
    location : '',
    border : false,
    status : false,
    size : 'S'
  }
  
  render() {
    const {
      imgScr,
      online,
      size,
      username,
      location,
      border
    } = this.props
    return (
    <Wrapper>
      <Img src={imgScr} size={size}>
        {border && <OnlineStatusBorder size={size} online={online} />}
        <OnlineStatusCircle online={online} />
      </Img>
      {username && <Nickname>{username}</Nickname>}
      {location && <Location>{`${location.country},${location.city}`}</Location>}
    </Wrapper>
    )
  }
}


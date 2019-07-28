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
    location : PropTypes.string
  }
  render() {
    const {
      imgScr,
      online,
      size,
      username,
      location : { country,city }
    } = this.props
    return (
    <Wrapper>
      <Img src={imgScr} size={size}>
        <OnlineStatusBorder online={online} />
        <OnlineStatusCircle online={online} />
      </Img>
      <Nickname>{username}</Nickname>
      <Location>{`${country},${city}`}</Location>
    </Wrapper>
    )
  }
}

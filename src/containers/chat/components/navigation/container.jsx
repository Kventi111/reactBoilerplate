import React, { Component } from 'react'
import Avatar from '../../../../components/global/avatar';
import List from './components/list'

import { Wrapper } from './style'


const fakeUserData = {
  imgScr : 'https://pp.userapi.com/c850024/v850024433/199fc1/F0yhYI6xAO8.jpg',
  online : true,
  size : "S",
  username : "kventin",
  location : { 
    country : 'Russia',
    city : "Moscow"
  }
}
export default class Navigation extends Component {
  render() {
    return (
      <Wrapper>
        <Avatar {...fakeUserData} />
        <List />
      </Wrapper>
    )
  }
}

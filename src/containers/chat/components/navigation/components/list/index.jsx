import React, { Component } from 'react'
import Item from '../item';

const fakeMunuItem = [
  {
  title : 'Home',
  active : false
},
{
  title : 'Chat',
  active : false
},
{
  title : 'Call',
  active : false
},
{
  title : 'Calendar',
  active : false
},
]

export default class List extends Component {
  render() {
    return (
      <div>
        {fakeMunuItem.map(item => <Item {...item} />)}
      </div>
    )
  }
}

import React, { Component } from 'react'
import Item from '../item'

import {
  DialogList
} from '../../style'

export default class List extends Component {
  render() {
    return (
      <DialogList>
        <Item />
      </DialogList>
    )
  }
}

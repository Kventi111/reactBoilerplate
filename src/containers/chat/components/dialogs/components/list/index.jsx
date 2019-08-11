import React, { Component } from 'react'
import Item from '../item'

import {
  DialogList
} from '../../style'

export default class List extends Component {
  render() {
    const { setCurrentDialog,dialogs } = this.props;
    return (
      <DialogList>
        {dialogs.map(item => 
          <Item 
            setCurrentDialog={setCurrentDialog}
            key={item.id} 
            id={item.id} 
            avatar={item.avatar} 
            username={item.username} 
            lastMessage={item.lastMessage} 
          />
        )}
      </DialogList>
    )
  }
}

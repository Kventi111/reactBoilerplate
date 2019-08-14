import React, { Component } from 'react'
import { APP } from 'application/constants'
import Item from '../item'

import {
  DialogList
} from '../../style'

export default class List extends Component {
  render() {
    const { setCurrentDialog,dialogs } = this.props;
    {APP.RENDER_LOG && console.count('Dialogs List')}   // eslint-disable-line no-lone-blocks

    return (
      <DialogList>
        {dialogs.map(item => 
          <Item 
            active={item.active}
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

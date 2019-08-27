import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { APP } from 'application/constants'
import Item from '../item'

import {
  DialogList
} from '../../style'

export default class List extends Component {
  static propTypes = {
    dialogs : PropTypes.object
  }

  render() {
    const { setCurrentDialog,dialogs } = this.props;
    {APP.RENDER_LOG && console.count('Dialogs List')}   // eslint-disable-line no-lone-blocks

    return (
      <DialogList>
        {dialogs.list.map(item => 
          <Item 
            key={item._id}
            id={item._id}
            setCurrentDialog={setCurrentDialog}
            username={item.partner.fullname}
            lastMessage={item.lastMessage.text}
          />
        )}
      </DialogList>
    )
  }
}

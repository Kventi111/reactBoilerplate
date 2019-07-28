import React, { Component } from 'react'
import PropTypes from 'prop-types';

import {
  ListItem
} from '../../style';

export default class Item extends Component {
  static propTypes = {
    title : PropTypes.string.isRequired,
    active : PropTypes.bool
  };
  render() {
    const {
      title,
      active
    } = this.props;
    return (
      <ListItem>
        <i class="fas fa-camera"></i>
        {title}
      </ListItem>
    )
  }
}

import React, { Component } from 'react'
import { APP } from 'application/constants'
import { FIELD_ID } from '../../constants'

import {
  Content
} from '../../style'

export default class Register extends Component {
  render() {
    {APP.RENDER_LOG && console.count('Register')}   // eslint-disable-line no-lone-blocks

    return (
      <Content>
        <p>Регистрация</p>
      </Content>
    );
  }
};

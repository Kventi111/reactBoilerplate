import React, { Component } from 'react'
import { APP } from 'application/constants'
import { FIELD_ID } from '../../constants'

import {
  Content
} from '../../style'

export default class Login extends Component {
  render() {
    {APP.RENDER_LOG && console.count('Login')}   // eslint-disable-line no-lone-blocks

    const { onHandleChange } = this.props;
    return (
      <Content>
        <p>Вход в приложение RChat</p>
        <div>
          <div>
            <label  htmlFor={FIELD_ID.EMAIL}>Логин</label><br/>
            <input  id={FIELD_ID.EMAIL} type="text" onChange={onHandleChange}/>
          </div>
          <div>
            <label  htmlFor={FIELD_ID.PASSWORD}>Пароль</label><br/>
            <input id={FIELD_ID.PASSWORD} type="text" onChange={onHandleChange}/>
          </div>
          <br/>
          <button onClick={onHandleChange} id={FIELD_ID.LOGIN_BTN}>Войти</button>
        </div>
        <br/>
        <i>Вы еще не зарегистрированны ?</i> <br/>
        <b>Зарегистрироваться</b>
      </Content>
    );
  }
};

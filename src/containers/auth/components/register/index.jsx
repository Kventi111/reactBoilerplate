import React, { Component } from 'react'
import { APP } from 'application/constants'
import { FIELD_ID } from '../../constants'

import {
  Content
} from '../../style'

export default class Register extends Component {
  render() {
    {APP.RENDER_LOG && console.count('Register')}   // eslint-disable-line no-lone-blocks
    const { onHandleChange } = this.props

    return (
      <Content>
        <p>Регистрация в приложение RChat</p>
        <div>
          <div>
            <label  htmlFor={FIELD_ID.EMAIL}>Почта</label><br/>
            <input  id={FIELD_ID.EMAIL} type="text" onChange={onHandleChange}/>
          </div>
          <div>
            <label  htmlFor={FIELD_ID.FIRST_NAME}>Имя</label><br/>
            <input  id={FIELD_ID.FIRST_NAME} type="text" onChange={onHandleChange}/>
          </div>
          <div>
            <label  htmlFor={FIELD_ID.LAST_NAME}>Фамилия</label><br/>
            <input id={FIELD_ID.LAST_NAME} type="text" onChange={onHandleChange}/>
          </div>
          <div>
            <label  htmlFor={FIELD_ID.PASSWORD}>Пароль</label><br/>
            <input id={FIELD_ID.PASSWORD} type="text" onChange={onHandleChange}/>
          </div>
          <br/>
          <button id={FIELD_ID.REGISTER_BTN} onClick={onHandleChange}>Зарегистрироваться</button>
        </div>
        <br/>
        <i>Уже есть аккаунт ?</i> <br/>
        <b>Войти в аккаунт</b>
      </Content>
    );
  }
};

import React, { Component } from 'react'
import { APP } from 'application/constants'

import Login from './components/login'
import Register from './components/register'

import {
  Wrapper,
} from './style'

export default class Auth extends Component {

  loginHandleChange = (e) => {
    const { id, value } = e.target;
    const { loginFromDataChangeAction } = this.props;
    
    loginFromDataChangeAction({fieldId : id,fieldValue : value})
  }

  registerHandleChange = (e) => {
    const { id, value } = e.target;
    const { registerFromDataChangeAction } = this.props;
    
    registerFromDataChangeAction({fieldId : id,fieldValue : value})
  }

  render() {
    {APP.RENDER_LOG && console.count('Chat')}   // eslint-disable-line no-lone-blocks
    const { authData } = this.props;
    
    return (
     <Wrapper>
       {authData.registerView 
        ? <Register onHandleChange={this.registerHandleChange} />
        : <Login onHandleChange={this.loginHandleChange} />
       }
     </Wrapper>
    );
  }
};

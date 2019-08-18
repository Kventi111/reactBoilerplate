import React, { Component } from 'react'
import { APP } from 'application/constants'

import Login from './components/login'
import Register from './components/register'

import {
  Wrapper,
} from './style'

export default class Auth extends Component {

  handleChange = (e) => {
    const { id, value } = e.target;
    const { handleChangeAction } = this.props;
    
    handleChangeAction({fieldId : id,fieldValue : value})
  }
  render() {
    {APP.RENDER_LOG && console.count('Chat')}   // eslint-disable-line no-lone-blocks
    const { authData } = this.props;
    
    return (
     <Wrapper>
       {authData.registerView 
        ? <Register />
        : <Login onHandleChange={this.handleChange} />
       }
     </Wrapper>
    );
  }
};

import React, { Component } from 'react'
import Questionary from '../containers/questionnaire'

export default class Application extends Component {
  render() {
    console.log('applicationProps', this.props);
    
    return (
      <div>
        application
        <Questionary />
      </div>
    )
  }
}

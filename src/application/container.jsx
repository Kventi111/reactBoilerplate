import React, { Component } from 'react'

export default class Application extends Component {
  render() {
    console.log('applicationProps', this.props);
    
    return (
      <div>
        application
      </div>
    )
  }
}

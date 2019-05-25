import React, { Component } from 'react'
import Questionary from '../containers/questionnaire'
import "./style.css"

export default class Application extends Component {
  render() {
    return (
      <div>
        <Questionary />
      </div>
    )
  }
}

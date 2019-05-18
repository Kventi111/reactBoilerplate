import React, { Component } from 'react'
import QuestionList from './conponents/questionList'

export default class Questionary extends Component {
  componentDidMount() {
    this.props.mount()    
  }
  render() {
    const {
      questionary : {loader,list}
    } = this.props
    return (
      <div>
        {loader ? 'Загрузка...' : <QuestionList list={list} />}
      </div>
    )
  }
}
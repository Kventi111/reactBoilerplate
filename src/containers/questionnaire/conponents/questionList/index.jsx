import React from 'react'
import QuestionItem from '../questionItem'
import { ListWrapper } from './style'

function QuestionList({ list }) {
  return (
    <ListWrapper>
      { list.map((
        {
          title,
          type,
          questions 
        },index) => (
        <QuestionItem key={index} title={title} type={type} questions={questions}  />
      )) }
    </ListWrapper>
  )
}

export default QuestionList;

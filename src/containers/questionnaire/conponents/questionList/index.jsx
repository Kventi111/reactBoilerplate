import React from 'react'
import QuestionItem from '../questionItem'

function QuestionList({ list }) {
  return (
    <div>
      { list.map((
        {
          title,
          type,
          questions 
        },index) => (
        <QuestionItem key={index} title={title} type={type} questions={questions}  />
      )) }
    </div>
  )
}

export default QuestionList

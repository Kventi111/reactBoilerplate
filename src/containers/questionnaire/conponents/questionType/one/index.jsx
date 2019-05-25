import React from 'react'
import {
  ItemWrapper,
  ItemTitle,
  ItemContent,
  ItemRadio
} from './style'

function One({ questions,title }) {
  console.log(questions);
  
  return (
    <ItemWrapper>
      <ItemTitle>{title}</ItemTitle>
      <ItemContent>
        <p>Да</p>
        <ItemRadio>        
          <input type="radio"/>
        </ItemRadio>
        <p>Нет</p>
        <ItemRadio>
          <input type="radio"/>
        </ItemRadio>
      </ItemContent>
    </ItemWrapper>
  )
}

export default One

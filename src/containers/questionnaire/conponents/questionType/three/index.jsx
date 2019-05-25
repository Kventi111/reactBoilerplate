import React from 'react'
import {
  ItemWrapper,
  ItemTitle,
  ItemContent,
  ItemCheckbox,
  QueItem
} from './style'

function One({ questions,title }) {
  console.log(questions);
  
  return (
    <ItemWrapper>
      <ItemTitle> Заголовок </ItemTitle>
      <ItemContent>
        <QueItem>
          <p>1</p>
          <ItemCheckbox type="checkbox"/>
        </QueItem>
        <QueItem>
          <p>1</p>
          <ItemCheckbox type="checkbox"/>
        </QueItem>
        <QueItem>
          <p>1</p>
          <ItemCheckbox type="checkbox"/>
        </QueItem>
      </ItemContent>
    </ItemWrapper>
  )
}

export default One

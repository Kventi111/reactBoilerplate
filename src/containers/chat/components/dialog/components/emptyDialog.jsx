import React from 'react'
import { APP } from 'application/constants'

import {
  EmptyDialogWrapper,
  EmptyDialogText
} from '../style'

function EmptyDialog() {
  {APP.RENDER_LOG && console.count('EmptyDialog')}   // eslint-disable-line no-lone-blocks

  return (
    <EmptyDialogWrapper>
      <EmptyDialogText>
        Выберите диалог
      </EmptyDialogText>
    </EmptyDialogWrapper>
  )
}

export default EmptyDialog;

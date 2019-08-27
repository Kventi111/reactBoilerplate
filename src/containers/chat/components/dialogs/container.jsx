import React, { Component } from 'react'
import DialogList from './components/list'
import { APP } from 'application/constants'


import {
  Wrapper,
  SearchWrapper,
  SearchInput
} from './style'

export default class Dialogs extends Component {
  render() {
    {APP.RENDER_LOG && console.count('Dialogs')}   // eslint-disable-line no-lone-blocks


    const { setCurrentDialog,dialogs } = this.props;
    return (
      <Wrapper>
        <SearchWrapper>
          <SearchInput placeholder="Поиск" />
        </SearchWrapper>
        {dialogs.list.length 
        ? <DialogList 
          dialogs={dialogs} 
          setCurrentDialog={setCurrentDialog} 
        />
        : 'Списоск диалогов пуст'
        }
      </Wrapper>
    )
  }
}

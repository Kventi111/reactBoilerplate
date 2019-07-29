import React, { Component } from 'react'
import DialogList from './components/list'
import Avatar from 'compoennts/global/avatar'

import {
  Wrapper,
  SearchWrapper,
  SearchInput
} from './style'

export default class Dialogs extends Component {
  render() {
    return (
      <Wrapper>
        <SearchWrapper>
          <SearchInput placeholder="Поиск" />
        </SearchWrapper>
        <DialogList />
      </Wrapper>
    )
  }
}

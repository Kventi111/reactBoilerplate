import React, { Component } from 'react'
import DialogList from './components/list'

import {
  Wrapper,
  SearchWrapper,
  SearchInput
} from './style'

export default class Dialogs extends Component {
  render() {
    const { setCurrentDialog,dialogs } = this.props;
    return (
      <Wrapper>
        <SearchWrapper>
          <SearchInput placeholder="Поиск" />
        </SearchWrapper>
        <DialogList dialogs={dialogs} setCurrentDialog={setCurrentDialog} />
      </Wrapper>
    )
  }
}

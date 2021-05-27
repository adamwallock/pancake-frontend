import React from 'react'
import styled from 'styled-components'
import { Spinner } from 'pixiufarm-uikit'
import Page from './layout/Page'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121827;
  width: 100%;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  )
}

export default PageLoader

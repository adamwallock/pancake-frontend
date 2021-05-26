import React from 'react'
import styled from 'styled-components'
import { Box } from 'pixiufarm-uikit'
import Container from '../layout/Container'

const Outer = styled(Box)<{ background?: string }>`
  background: transparent;
`

const Inner = styled(Container)`
  padding-top: 32px;
  padding-bottom: 32px;
`

const PageHeader: React.FC<{ background?: string }> = ({ background, children, ...props }) => (
  <Outer background={background} {...props}>
    <Inner>{children}</Inner>
  </Outer>
)

export default PageHeader

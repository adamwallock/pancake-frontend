import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  & > * {
    min-width: 280px;
    max-width: 31.5%;
    width: 100%;
    margin: 0 8px;
    margin-bottom: 32px;
  }
`

export default FlexLayout

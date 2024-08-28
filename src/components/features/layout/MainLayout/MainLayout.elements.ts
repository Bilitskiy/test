import styled from 'styled-components'

export const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
`

export const MainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Content = styled.div`
  margin-top: -100px;
  padding-top: 100px;
  flex-grow: 1;
  overflow-y: scroll;
`
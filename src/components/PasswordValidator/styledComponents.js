// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const SubContainer = styled.div`
  background-image: linear-gradient(to top, #383a4e, #475569);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #edeeff;
`

export const Text = styled.p`
  color: #edeeff;
`

export const Label = styled.label``

export const Input = styled.input`
  outline: none;
  margin-top: 20px;
  width: 100%;
  padding: 5px;
`

export const ErrorMsg = styled.p`
  color: red;
`

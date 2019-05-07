import React from 'react'
import styled from 'styled-components'

const TextBox = ({ text }) => <TextContainer>{text}</TextContainer>

export default TextBox

const TextContainer = styled.pre`
  margin-top: 15px;
  max-height: 40vh;
  overflow-y: auto;
  font-size: 2rem;
`

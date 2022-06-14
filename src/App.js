import React from 'react';
import styled from 'styled-components';

export default function App() {
  return (
    <Texto>Olá mundo</Texto>
  )
}

const Texto = styled.h2`
  font-size: 22px;
  color: blue;
`
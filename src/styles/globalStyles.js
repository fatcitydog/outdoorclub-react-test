import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  }

body{
  color: black;
  font-family: 'Familjen Grotesk', sans-serif;
  transition: all 0.50s linear;
  }
`;

export const Box = styled.section`
  width: 100%;
  height: 100%;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
`

export const Input = styled.input`
  width: 20rem;
  height: 3rem;
  margin: 2rem;
  border: none;
  border-bottom: 1px solid silver;
 
`
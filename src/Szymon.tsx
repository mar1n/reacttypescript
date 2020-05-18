import React from "react";
import styled, { ThemeProvider, css } from "styled-components";


const theme = {
  primary: "red",
  secondary: "green",
  alert: 'yellow',
  font: 'sans-serif'
};

const H1 = styled.h1`
    font-family: ${props => props.theme.font};
`;

const Button = styled.button`
  font-family: ${props => props.theme.font};
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  padding: 7px 10px;
  color: #fff;
  &:hover {
    background: blue;
  }
`;

export default function Szymon() {
  return (
    <ThemeProvider theme={theme}>
      <div className="szymon">
        <H1>Styled Component</H1>
        <form action="">
          <input type="" />
          <button>Create</button>
          <Button color="alert">Created</Button>
        </form>
      </div>
    </ThemeProvider>
  );
}

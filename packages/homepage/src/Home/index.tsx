import React from 'react';
import logo from '%PUBLIC_URL%/assets/gf-react2.png'
import './index.css';
import styled, { keyframes } from 'styled-components';
import Navbar from '../Navbar'

//import {Typography} from '@material-ui/core'

const Container = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const StyledA = styled.a`
  color: #61dafb;
`;

export default function Home() {
  return (
      <Container>
        {/*<Navbar /> */}
        <Header className="App-header">
          <Logo src="assets/gf-react2.png" alt="logo" />
          { /*<Typography variant="title" color="inherit">
                    Intensivão React Grupo Fleury
            </Typography> */}
          <StyledA href="https://github.com/grupofleury/learn-react-mdx-deck">
            Docs Oficial
          </StyledA>

          <StyledA href="/dist/class3/index.html">
            Aula 3
          </StyledA>

          <h1>Conteúdo</h1>
          
          <StyledA href="https://github.com/grupofleury/learn-react-mdx-deck">
            Docs Oficial
          </StyledA>
        </Header>
      </Container>
  );
}


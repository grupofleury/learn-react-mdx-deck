import React from 'react';
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

          <h1>Intensivão React Grupo Fleury ⚛</h1>
          <h2>Conteúdo 📔</h2>
          <ul>
            <li><a href="/class1/index.html">Aula 1</a></li>
            <li><a href="/class2/index.html">Aula 2</a></li>
            <li><a href="/class3/index.html">Aula 3</a></li>
            <li><a href="/class4/index.html">Aula 4</a></li>
            <li><a href="/class5/index.html">Aula 5</a></li>
            {/* Será que tem um jeito automático de trazer esses links? */}
          </ul>

          <StyledA href="https://reactjs.org/docs/">
            Docs Oficial
          </StyledA>
          
          <StyledA href="https://github.com/grupofleury/learn-react-mdx-deck">
            GitHub
          </StyledA>
        </Header>
      </Container>
  );
}


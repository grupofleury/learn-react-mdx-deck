import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system';

// Add styled-system functions to your component
export const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

export const IconImage = styled.img`
  max-height: 60px;
  max-width: 60px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: white;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
`;

export const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SpaceBetween = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Root = styled.div([], {
  width: '50vw',
  height: '100vh',
});

export const GFLogo = styled.img`
  max-width: 600px;
`;
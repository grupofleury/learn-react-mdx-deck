const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function Welcome(props) {
  return  <Wrapper>
    <Title>
      {props.name}
    </Title>
  </Wrapper>
}
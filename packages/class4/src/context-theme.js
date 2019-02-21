const ThemeContext = React.createContext('light');

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Navbar /> //Qualquer componente aqui dentro lê
      </ThemeContext.Provider>
    );
  }
}

function Navbar(props) {
  return (
    <div>
      <StyledButton />
    </div>
  );
}

class StyledButton extends React.Component {
  static contextType = ThemeContext; //Associa o contexto a classe...
  render() {
    return <Button theme={this.context} />; //..sendo possível utilizar aqui
  }
}

function StyledButton () {
  return (
    <ThemeContext.Consumer>
      { value => <Button theme={value} />}
    </ThemeContext.Consumer>
  )
}
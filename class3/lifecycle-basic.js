class App extends React.Component {
  componentWillMount(){ //before render()
    this.setState({name: 'fleury'})
  }
  
  render() {
    return (
      <div>
        <h1> {this.state.name} </h1>
      </div>
    )
  }
}
function App() {
  const array = ['a','b','c'];
  return(
    <div>
    {
      array.map(item => <p>{item}</p>)
    }
    </div>
  )
}
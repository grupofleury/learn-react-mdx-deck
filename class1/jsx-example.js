function App() {
  const bool = true;
  return(
    <div>
    {
      bool ? 
        <p>bool is true</p>
      :
        <p>bool is false</p>
    }
    </div>
  )
}
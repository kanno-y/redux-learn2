import React from "react";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => state.count);
  return (
    <div className="App">
      <h1>Redux learn</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default App;

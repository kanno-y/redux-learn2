import React from "react";
import store from "./store/index";
import "./App.css";

function App() {
  console.log(store);
  return (
    <div className="App">
      <h1>Redux learn</h1>
      <p>Count: {store.getState().count}</p>
    </div>
  );
}

export default App;

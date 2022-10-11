import React from "react";
import store from "./store/index";
import "./App.css";
import { connect } from "react-redux";
import Count from "./components/Count";

function App({ count }) {
  return (
    <div className="App">
      <h1>Redux learn</h1>
      <p>Count: {store.getState().count}</p>
      <Count />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);

import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "../store";
import Quote from "./Quote";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Quote />
      </Provider>
    );
  }
}

export default App;

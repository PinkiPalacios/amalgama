import Router from "./src/index";
import * as React from "react";
import { Provider } from "react-redux";
import store from "./src/store/index";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

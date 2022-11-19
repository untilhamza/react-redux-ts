import React from "react";
import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

function App() {
  return (
    <Provider store={store}>
      <h1>Search for a package and press Enter</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;

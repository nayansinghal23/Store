import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div>
        <Products />
      </div>
    </Provider>
  );
};

export default App;

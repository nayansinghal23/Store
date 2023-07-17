import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SelectedItems from "./components/SelectedItems";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/selectedItems" element={<SelectedItems />} />
      </Routes>
    </Provider>
  );
};

export default App;

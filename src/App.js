import React, { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Products = lazy(() => import("./components/Products"));
const SelectedItems = lazy(() => import("./components/SelectedItems"));

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/selectedItems" element={<SelectedItems />} />
        </Routes>
      </Suspense>
    </Provider>
  );
};

export default App;

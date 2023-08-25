import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <AnimatedRoutes />
      </Suspense>
    </Provider>
  );
};

export default App;

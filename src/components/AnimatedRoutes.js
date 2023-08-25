import React, { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Products = lazy(() => import("./Products"));
const SelectedItems = lazy(() => import("./SelectedItems"));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Products />} />
        <Route path="/selectedItems" element={<SelectedItems />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

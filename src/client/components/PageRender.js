import React from "react";
import { Routes, Route } from "react-router-dom";

const PageRender = ({ options }) => (
  <Routes>
    {options.map((item) => (
      <Route key={item.path} path={item.path} element={item.element} />
    ))}
  </Routes>
);

export default PageRender;

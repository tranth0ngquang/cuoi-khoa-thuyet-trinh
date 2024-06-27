import React from "react";

import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import useRoutesCustom from "./routes/useRoutesCustom";

function App() {
  const myRoutes = useRoutesCustom();
  return myRoutes;
}

export default App;

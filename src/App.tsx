import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coworkers from "./pages/Coworkers";
import Businesses from "./pages/Businesses";
import Coworkings from "./pages/Coworkings";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/coworkers" element={<Coworkers />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/coworkings" element={<Coworkings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Button } from "primereact/button";

import DayBooks from "./pages/DayBook/DayBook";

import "./App.scss";
import DayBookDetail from "./pages/DayBookDetail/DayBookDetail";
import { AppRoutes } from "./consts/routes";

function App() {
  return (
    <>
      <header className="app-header">
        <h2>AGS Day Book</h2>
      </header>
      <main className="day-book">
        <Routes>
          <Route index element={<Navigate to={AppRoutes.DayBooks} />} />
          <Route path={AppRoutes.DayBooks} Component={DayBooks} />
          <Route path={AppRoutes.DayBookDetail} Component={DayBookDetail} />
        </Routes>
      </main>
    </>
  );
}

export default App;

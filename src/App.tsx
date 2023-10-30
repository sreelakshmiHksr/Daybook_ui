import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Button } from 'primereact/button';

import DayBooks from './pages/DayBook/DayBook';

import './App.scss';

function App() {
  return (
    <main className="day-book">
      <header className='app-header'>
        <h2>AGS Day Book</h2>
      </header>
      <Routes>
          <Route index Component={DayBooks} /> 
      </Routes>
    </main>
  );
}

export default App;

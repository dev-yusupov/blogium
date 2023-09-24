import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={MainLayout} />
      </Routes>
    </Router>
  );
}

export default App;

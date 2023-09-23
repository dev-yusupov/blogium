import React from 'react';
import './App.scss';
import routers from './routers';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {
          routers.map((prop, key) => {
            return (
              <Route path={prop.path} Component={prop.component} key={key} />
            )
          })
        }
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routers from './routers';
import { UserDetails } from './pages/Users';

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
        <Route path="/users/user/:id" Component={UserDetails} />
      </Routes>
    </Router>
  );
}

export default App;

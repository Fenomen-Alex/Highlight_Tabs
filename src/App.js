import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';
import './App.css';


function App() {

  return (
    <Router>
      <div className="app">
        <div className="browser">
          <Header />

          <div className="viewport">
            <Routes />
          </div>
        </div>
      </div>

    </Router>
  );
}

export default App;

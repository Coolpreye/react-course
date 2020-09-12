import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Main />
      </Router>
    </React.Fragment>
  );
}

export default App;

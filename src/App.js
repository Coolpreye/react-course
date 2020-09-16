import React from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <Main />
        </Router>
      </React.Fragment>
    </Provider>
  );
}

export default App;

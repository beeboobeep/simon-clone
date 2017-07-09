import React, { Component } from 'react';
import './App.css';
import FullUI from './views/FullUI.jsx'
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer.js'
import thunk from 'redux-thunk'

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <FullUI />
      </Provider>
    );
  }
}

export default App;

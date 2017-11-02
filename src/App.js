import React, { Component } from 'react';
import './App.css';
import View from './views/View.jsx'
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer.js'
import thunk from 'redux-thunk'

let store;

if (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) {
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
} else {
  store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <View />
      </Provider>
    );
  }
}

export default App;

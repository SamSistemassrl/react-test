import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/';

const loadState = key => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return undefined;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.log('Load Error', error);
    return undefined;
  }
};
const saveState = (key, state) => {
  try {
    let serializedData = JSON.stringify(state);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.log('Save Error', error);
  }
};

let store = createStore(
  rootReducer,
  loadState('task'),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
store.subscribe(function() {
  saveState('task', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

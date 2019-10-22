import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {createStore} from "redux"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';

const loadState = (key) => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null){
        return undefined ;
      }
      return JSON.parse(serializedData)
    } catch (error) {
      console.log("Load Error",error)
      return undefined;
    }
  }
  const saveState = (key,state) => {
    try {
      let serializedData = JSON.stringify(state)
      localStorage.setItem(key, serializedData)
    } catch (error) {
        console.log("Save Error",error)
    }
  }


let store = createStore(rootReducer,loadState('task'));
store.subscribe( function () {
    saveState('task',store.getState())
})
ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

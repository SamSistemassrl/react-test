import React from 'react';
import logo from './logo.png';
import './App.css';
import TaskAddForm from './components/TaskAddForm';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bienvenido a Sam Sistemas</p>
        <div className="Container">
          <div className="containerAddForm">
            <TaskAddForm />
          </div>
          <hr className="containerDivider"></hr>
          <div className="containerTaskList">
            <TaskList />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

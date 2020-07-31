import React from 'react';
import './App.scss';
import RootRouter from './Router'
import { BrowserRouter, Link } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/connect4">Connect 4</Link>
          <Link className="link" to="/tictactoe">Tic Tac Toe</Link>
        </nav>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header> */}
        <RootRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;

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
        <RootRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import TicTacToe from './TicTacToe';
import Connect4 from './Connect4';
import Home from './Home';
// import App from './App';

const RootRouter = () => {
    return (
        <Switch>
            <Route path="/connect4">
                <Connect4 />
            </Route>
            <Route path="/tictactoe">
                <TicTacToe />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default RootRouter;
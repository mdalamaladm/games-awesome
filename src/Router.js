import React from 'react';
import {
    Switch,
    Route,
} from 'react-router-dom';
import TicTacToe from './scenes/TicTacToe/tictactoe';
import Connect4 from './scenes/Connect4/connect4';
import Home from './scenes/Home/home';
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
import React from 'react';
import './home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="home">
            <h1>Pilih Permainan</h1>
            <Link to="/connect4">Connect 4</Link>
            <Link to="/tictactoe">Tic Tac Toe</Link>
        </div>
    );
}

export default Home;
import React from 'react';
import './index.css';
import { useHistory } from 'react-router-dom';

const TicTacToe = () => {

    let history = useHistory();

    const backHome = () => history.push('/');

    return(
        <div className="tic-tac-toe">
            <h1>Tic Tac Toe</h1>
            <h3>Segera Hadir</h3>
            <p className="back-button" onClick={backHome}>Kembali</p>

        </div>
    );
}

export default TicTacToe;
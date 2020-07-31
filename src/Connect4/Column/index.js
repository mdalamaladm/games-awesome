import React from 'react';
import Coin from 'Connect4/Coin'
import "./index.css";

const Column = ({column, onClick}) => {

    return (
        <div className='column-box' id={`column-${column}`}>
            <Coin row='1' column={column}/>
            <Coin row='2' column={column}/>
            <Coin row='3' column={column}/>
            <Coin row='4' column={column}/>
            <Coin row='5' column={column}/>
            <Coin row='6' column={column}/>
            <div className="button"  onClick={onClick}><span>v</span></div>
        </div>
    )
}

export default Column;
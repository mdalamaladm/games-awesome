import React from 'react';
import "./index.css";

const Coin = ({column, row}) => {
    return (
        <div className='row-box' id={`row-${column}-${row}`}>
        </div>
    )
}

export default Coin;
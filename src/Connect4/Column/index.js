import React from 'react';
import Coin from 'Connect4/Coin'
import "./index.scss";

const Column = ({column, onClick, isEnded}) => {

  const rows = [1, 2, 3, 4, 5, 6]
  console.log('isEnded', isEnded);
  return (
    <div className='column-box' id={`column-${column}`}>
      {
        rows.map(row => {
          return(
            <Coin row={row} column={column}/>
          )
        })
      }
      <div className="button"  onClick={isEnded ? null : onClick}><span>v</span></div>
    </div>
  )
}

export default Column;
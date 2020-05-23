import React from 'react';
import Coin from 'Coin'
import "./index.css";

const Column = ({column, onClick}) => {
    // const [state, dispatch] = React.useReducer(reducer, intialState)
    // console.log(state.column)
    // let realColumn = parseFloat(column);
    // console.log('realColumn', realColumn)
    // console.log('COLUMN', state.column)

    return (
        <div className='column-box' id={`column-${column}`}>
            {/* Column: { state.column } */}
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
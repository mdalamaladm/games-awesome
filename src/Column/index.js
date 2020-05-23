import React from 'react';
import Coin from '/home/tsl/Documents/latihan-react/src/Coin'
import "./index.css";

// let player = 'red';

// let arrayColumn = [];

// for(let i = 0; i < 7; i++){
//     arrayColumn.push([]);
// }

// for(let i = 0; i < 7; i++){
//     for(let j = 0; j < 6; j++){
//         arrayColumn[i][j] = '';
//     }
// }

// console.log('Array Not React', arrayColumn)

// function checkAll(column, i, player){
//     let up = check(column, i, 0, 1, 0, player);
//     let down = check(column, i, 0, -1, 0, player);
//     let left = check(column, i, -1, 0, 0, player);
//     let right = check(column, i, 1, 0, 0, player);
//     let upRight = check(column, i, 1, 1, 0, player);
//     let upLeft = check(column, i, -1, 1, 0, player);
//     let downRight = check(column, i, 1, -1, 0, player);
//     let downLeft = check(column, i, -1, -1, 0, player);
//     if((up + down > 2) || (left + right > 2) || (upRight + downLeft > 2) || (upLeft +downRight > 2)){
//         return true;
//     } else {
//         return false;
//     }
// }


// function check(column, row, changeColumn, changeRow, rowTrue, player){
//     // console.log(arrayColumn)
//     let rowReal = row + changeRow;
//     let columReal = column + changeColumn;
//     let rowTruReal = rowTrue;
//     if(columReal > 6 || columReal < 0 || arrayColumn[columReal][rowReal] !== player || arrayColumn[columReal][rowReal] === undefined ){
//         return rowTruReal;
//     } else {
//         rowTruReal++;
//         return check(columReal, rowReal ,changeColumn, changeRow, rowTruReal, player);

//     }
  
// }

// function addCoin(column){
//     let defaultColumn = column || 0
//     for(let i = 0; i < 6; i++) {
//     let coin = document.getElementById(`row-${defaultColumn + 1}-${i + 1}`)
//         if(arrayColumn[defaultColumn][i] === ''){
//             arrayColumn[defaultColumn][i] = player;

//             if(player === 'red'){
//                 coin.style.backgroundColor = 'red';
//             } else {
//                 coin.style.backgroundColor = 'black';
//             }

//             let fourLine = checkAll(defaultColumn, i, player);
//             if(fourLine === true){
//                 if(player === 'red'){
//                     coin.style.backgroundColor = 'red';
//                     setTimeout(() => alert('MERAH MENANG'), 100);
//                     // location.reload();

//                 } else {
//                     coin.style.backgroundColor = 'black';
//                     setTimeout(() => alert('HITAM MENANG'), 100);
//                     // location.reload();
//                 }
//             } else {
//                 if(player === 'red'){
//                     player = 'black';
//                 } else {
//                     player = 'red';
//                 }
//             }
    
//             break;
//         }        
//     }


// }

// const intialState = {
//     column: Array(7).fill(null).map(() => Array(6).fill('')),
//     player: 'red'
// }

// const reducer = (state, action) => {
//     // console.log(state.column)
//     console.log(state.player)
//     switch(action.type) {
//         case 'addCoin':
//             for(let i = 0; i < 6; i++) {
//                 let coin = document.getElementById(`row-${action.value + 1}-${i + 1}`)
//                     if(state.column[action.value][i] === ''){
//                         // state.column[column][i] = player;
            
//                         if(state.player === 'red'){
//                             coin.style.backgroundColor = 'red';
//                             return {
//                                 ...state,
//                                 column: [
//                                     ...state.column.slice(0, action.value),
//                                     [
//                                         ...state.column[action.value].slice(0, i),
//                                         state.player,
//                                         ...state.column[action.value].slice(i + 1),
//                                     ],
//                                     ...state.column.slice(action.value + 1)
//                                 ],
//                                 player: 'black',
//                             }
//                         } else {
//                             coin.style.backgroundColor = 'black';
//                             return {
//                                 ...state,
//                                 column: [
//                                     ...state.column.slice(0, action.value),
//                                     [
//                                         ...state.column[action.value].slice(0, i),
//                                         state.player,
//                                         ...state.column[action.value].slice(i + 1),
//                                     ],
//                                     ...state.column.slice(action.value + 1)
//                                 ],
//                                 player: 'red',
//                             }
//                         }
            
//                         let fourLine = checkAll(action.value, i, state.player);
//                         if(fourLine === true){
//                             if(state.player === 'red'){
//                                 coin.style.backgroundColor = 'red';
//                                 setTimeout(() => alert('MERAH MENANG'), 100);
//                                 // location.reload();
            
//                             } else {
//                                 coin.style.backgroundColor = 'black';
//                                 setTimeout(() => alert('HITAM MENANG'), 100);
//                                 // location.reload();
//                             }
//                         } else {
//                             if(state.player === 'red'){
//                                 return {
//                                     ...state,
//                                     column: [
//                                         ...state.column.slice(0, action.value),
//                                         [
//                                             ...state.column[action.value].slice(0, i),
//                                             state.player,
//                                             ...state.column[action.value].slice(i + 1),
//                                         ],
//                                         ...state.column.slice(action.value + 1)
//                                     ],
//                                     player: 'black',
//                                 }
//                             } else {
//                                 return {
//                                     ...state,
//                                     column: [
//                                         ...state.column.slice(0, action.value),
//                                         [
//                                             ...state.column[action.value].slice(0, i),
//                                             state.player,
//                                             ...state.column[action.value].slice(i + 1),
//                                         ],
//                                         ...state.column.slice(action.value + 1)
//                                     ],
//                                     player: 'red'
//                                 }
//                             }
//                         }
                
//                         break;
//                     }        
//                 }
//             return {
//                 column: state.column
//             }
//         default:
//             return {...state}
//     }
// }

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
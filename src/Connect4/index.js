import React from 'react';
import Column from '../Column';
import './index.css';
  
  
  const initialState = {
      column: Array(7).fill(null).map(() => Array(6).fill('')),
      currentPlayer: 'red',
      beforePlayer: '',
      currentRow: 0,
      currentColumn: null,
  }
  
  const reducer = (state, action) => {
      switch(action.type) {
          case 'addCoin':
            for(let i = 0; i < 6; i++) {
              let coin = document.getElementById(`row-${action.value + 1}-${i + 1}`)
              console.log(state)
              if(state.column[action.value][i] === ''){
                  // state.column[column][i] = currentPlayer;
                if(state.currentPlayer === 'red'){
                  coin.style.backgroundColor = 'red';
                  return {
                      // ...state,
                      column: [
                          ...state.column.slice(0, action.value),
                          [
                              ...state.column[action.value].slice(0, i),
                              'red',
                              ...state.column[action.value].slice(i + 1),
                          ],
                          ...state.column.slice(action.value + 1)
                      ],
                      beforePlayer: 'red',
                      currentPlayer: 'black',
                      currentRow: i,
                      currentColumn: action.value,
                  }
                } else {
                  coin.style.backgroundColor = 'black';
                  return {
                      // ...state,
                      column: [
                          ...state.column.slice(0, action.value),
                          [
                              ...state.column[action.value].slice(0, i),
                              'black',
                              ...state.column[action.value].slice(i + 1),
                          ],
                          ...state.column.slice(action.value + 1)
                      ],
                      beforePlayer: 'black',
                      currentPlayer: 'red',
                      currentRow: i,
                      currentColumn: action.value,
                  }
                }
              }
            }
            return {
              ...state
            }
          default:
            return {
              ...state
            }
      }
  }
  
const Connect4 = () => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {

      function checkAll(column, i, player){
        let up = check(column, i, 0, 1, 0, player);
        let down = check(column, i, 0, -1, 0, player);
        let left = check(column, i, -1, 0, 0, player);
        let right = check(column, i, 1, 0, 0, player);
        let upRight = check(column, i, 1, 1, 0, player);
        let upLeft = check(column, i, -1, 1, 0, player);
        let downRight = check(column, i, 1, -1, 0, player);
        let downLeft = check(column, i, -1, -1, 0, player);
        if((up + down > 2) || (left + right > 2) || (upRight + downLeft > 2) || (upLeft +downRight > 2)){
            return true;
        } else {
            return false;
        }
      }

      function check(column, row, changeColumn, changeRow, rowTrue, player){
        let rowReal = row + changeRow;
        let columReal = column + changeColumn;
        let rowTruReal = rowTrue;
        if(columReal > 6 || columReal < 0 || state.column[columReal][rowReal] !== player || state.column[columReal][rowReal] === undefined ){
            return rowTruReal;
        } else {
            rowTruReal++;
            console.log('After Add', rowTruReal)
            return check(columReal, rowReal ,changeColumn, changeRow, rowTruReal, player);
      
        }
      
      }
      
      let fourLine = checkAll(state.currentColumn, state.currentRow, state.beforePlayer);
      if(fourLine === true){
        let coin = document.getElementById(`row-${state.currentColumn + 1}-${state.currentRow + 1}`)
        if(state.beforePlayer === 'red'){
            coin.style.backgroundColor = 'red';
            // alert('MERAH MENANG');
            setTimeout(() => alert('MERAH MENANG'), 100);
        } else if(state.beforePlayer === 'black') {
            coin.style.backgroundColor = 'black';
            // alert('HITAM MENANG')
            setTimeout(() => alert('HITAM MENANG'), 100);
        }
      }

    })
  
    const addCoin = (dispatch, value) => {
      dispatch({
        type: 'addCoin',
        value
      })
    }


    return (
        <div className="connect-four">
          <h2 className="judul">Connect 4 Game</h2>
          <div className="connect-four-container">
            {/* <div className="judul"> */}
            {/* </div> */}
            <Column column='1' onClick={() => { addCoin(dispatch, 0) }} />
            <Column column='2' onClick={() => { addCoin(dispatch, 1) }}/>
            <Column column='3' onClick={() => { addCoin(dispatch, 2) }}/>
            <Column column='4' onClick={() => { addCoin(dispatch, 3) }}/>
            <Column column='5' onClick={() => { addCoin(dispatch, 4) }}/>
            <Column column='6' onClick={() => { addCoin(dispatch, 5) }}/>
            <Column column='7' onClick={() => { addCoin(dispatch, 6) }}/>
          </div>
        </div>
    )
}

export default Connect4;
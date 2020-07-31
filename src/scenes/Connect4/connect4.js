import React from 'react';
import Column from './components/Column/column';
import Text from './components/Text/text';
import {reducer, initialState} from './reducer';
import checkAll from './utils/rules';
import './connect4.scss';

  
const Connect4 = () => {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
      
      let fourLine = checkAll(state, state.currentColumn, state.currentRow, state.beforePlayer);
      if(!state.gameEnd){
        if(fourLine === true){
          let coin = document.getElementById(`row-${state.currentColumn + 1}-${state.currentRow + 1}`)
          if(state.beforePlayer === 'red'){
              coin.style.backgroundColor = 'red';
              dispatch({type: 'endGame', value: true})
              dispatch({type: 'winner', value: 'red'})
          } else if(state.beforePlayer === 'black') {
              coin.style.backgroundColor = 'black';
              dispatch({type: 'endGame', value: true})
              dispatch({type: 'winner', value: 'black'})
          }
        }
      }

    })
  
    const addCoin = (dispatch, value) => {
      dispatch({
        type: 'addCoin',
        value
      })
    }

    const columns = [1, 2, 3, 4, 5, 6, 7]

    return (
        <div className="connect-four">
          <h2 className="judul">Connect 4 Game</h2>
          <Text winner={state.winner} currentPlayer={state.currentPlayer} gameEnd={state.gameEnd} />
          <div className="connect-four-container">
            <div className="board">
            {
              columns.map(column => {
                return (
                    <Column 
                      column={column} 
                      onClick={() => { addCoin(dispatch, column - 1) }}
                      isEnded={state.gameEnd}
                    />
                )
              })
            }
            </div>
          </div>
        </div>
    )
}

export default Connect4;
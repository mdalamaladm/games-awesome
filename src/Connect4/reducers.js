export const initialState = {
  column: Array(7).fill(null).map(() => Array(6).fill('')),
  currentPlayer: 'red',
  beforePlayer: '',
  currentRow: 0,
  currentColumn: null,
  gameEnd: false,
  winner: 'red'
}

export const reducer = (state, action) => {
  switch(action.type) {
      case 'addCoin':
        for(let i = 0; i < 6; i++) {
          let coin = document.getElementById(`row-${action.value + 1}-${i + 1}`)
          if(state.column[action.value][i] === ''){
            if(state.currentPlayer === 'red'){
              coin.style.backgroundColor = 'red';
              return {
                  ...state,
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
                  ...state,
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
      case 'endGame':
        return {
          ...state,
          gameEnd: action.value
        }
      case 'winner':
        return {
          ...state,
          winner: action.value
        }
      default:
        return {
          ...state
        }
  }
}
export default function checkAll(state, column, i, player){
  let up = check(state, column, i, 0, 1, 0, player);
  let down = check(state, column, i, 0, -1, 0, player);
  let left = check(state, column, i, -1, 0, 0, player);
  let right = check(state, column, i, 1, 0, 0, player);
  let upRight = check(state, column, i, 1, 1, 0, player);
  let upLeft = check(state, column, i, -1, 1, 0, player);
  let downRight = check(state, column, i, 1, -1, 0, player);
  let downLeft = check(state, column, i, -1, -1, 0, player);
  if((up + down > 2) || (left + right > 2) || (upRight + downLeft > 2) || (upLeft +downRight > 2)){
      return true;
  } else {
      return false;
  }
}

function check(state, column, row, changeColumn, changeRow, rowTrue, player){
  let rowReal = row + changeRow;
  let columReal = column + changeColumn;
  let rowTruReal = rowTrue;
  if(columReal > 6 || columReal < 0 || state.column[columReal][rowReal] !== player || state.column[columReal][rowReal] === undefined ){
      return rowTruReal;
  } else {
      rowTruReal++;
      return check(state, columReal, rowReal ,changeColumn, changeRow, rowTruReal, player);

  }

}
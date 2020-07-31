import React from 'react';
import "./index.scss";

const Text = ({winner, currentPlayer, gameEnd}) => {
  return (
    gameEnd ?
      <h3>
        <span className={`player-name ${winner}-coin`}>
          { winner.charAt(0).toUpperCase() + winner.slice(1) }
        </span> wins
      </h3>
    :
      <h3>
        <span className={`player-name ${currentPlayer}-coin`}>
          { currentPlayer.charAt(0).toUpperCase() + currentPlayer.slice(1) }
        </span> turns
      </h3>
  )
}

export default Text;
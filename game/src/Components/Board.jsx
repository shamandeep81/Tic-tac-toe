import React from 'react'

import { Cell} from "./Cell"
import "./Board.css"

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {
        board.map((value, idx) => {
          return <Cell key={idx} value={value} onClick={() => value === null && onClick(idx)} />;
        })
      }
    </div>
  )
}
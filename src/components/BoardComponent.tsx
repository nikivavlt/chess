import React, { FC, useEffect, useState } from 'react'
import { Board } from '../models/Board'
import CellComponent from './CellComponent';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard, currentPlayer, swapPlayer}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);


  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.piece?.canMove(cell)) {
      selectedCell.movePiece(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.piece?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  }

  function highlightCells() {
    board.hightlightCells(selectedCell);
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div>
      <h2>Current move: {currentPlayer?.color}</h2>
      <div className='board'>
        {board.cells.map((row, index) => 
          <React.Fragment key={index}>
            {row.map((cell) => 
              <CellComponent 
                cell={cell}
                click={click}
                selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                key={cell.id}
              />
            )}
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default BoardComponent;
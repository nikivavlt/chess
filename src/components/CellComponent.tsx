import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, click, selected}) => {
  return (
    <div 
      className={['cell', cell.color, selected ? 'selected' : ''].join(' ')}
      style={{background: cell.available && cell.piece ? 'green' : ''}}
      onClick={() => click(cell)}>
      {cell.available && !cell.piece && <div className={'available'} />}
      {cell.piece?.logo && <img src={cell.piece.logo} alt={cell.piece.name}></img>}
    </div>
  )
}

export default CellComponent
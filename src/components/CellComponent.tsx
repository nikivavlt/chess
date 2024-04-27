import React, { FC } from 'react'
import { Cell } from '../models/Cell'

interface CellProps {
    cell: Cell;
}

const CellComponent: FC<CellProps> = ({cell}) => {
  return (
    <div className={['cell', cell.color].join(' ')}>
      {cell.piece?.logo && <img src={cell.piece.logo} alt={cell.piece.name}></img>}
    </div>
  )
}

export default CellComponent
import React, { FC } from 'react'
import { Piece } from '../models/pieces/Piece';

interface LostPiecesProps {
    title: string;
    pieces: Piece[];
}

const LostPieces: FC<LostPiecesProps> = ({ title, pieces }) => {
  return (
    <div className='lost'>
        <h3>{title}</h3>
        {pieces.map((piece) => 
            <div key={piece.id}>
                {piece.name} {piece.logo && <img width={20} height={20} src={piece.logo} alt='Piece logo'/>}
            </div>
        )}
    </div>
  )
}

export default LostPieces
import { Colors } from '../Colors';
import logo from '../../assets/black-queen.png';
import { Cell } from '../Cell';

export enum PiecesNames {
    PIECE = 'Piece',
    KING = 'King',
    QUEEN = 'Queen',
    KNIGHT = 'Knight',
    PAWN = 'Pawn',
    ROOK = 'Rook',
    BISHOP = 'Bishop',
}

export class Piece {
    color: Colors;
    logo: typeof logo | null;
    cell: Cell;
    name: PiecesNames;
    id: number;

    constructor (color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.piece = this;
        this.logo = null;
        this.name = PiecesNames.PIECE;
        this.id = Math.random();
    }

    canMove(target: Cell): boolean {
        if (target.piece?.color === this.color) return false;
        if (target.piece?.name === PiecesNames.KING) return false;

        // isKingUnderAttack - ? (Check and mate)

        return true;
    }

    movePiece(target: Cell) {
        
    }
}
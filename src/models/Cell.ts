import { Board } from "./Board";
import { Colors } from "./Colors";
import { Piece } from "./pieces/Piece";


export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    piece: Piece | null;
    board: Board;
    available: boolean;
    id: number;

    constructor (board: Board, x: number, y: number, color: Colors, piece: Piece | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.piece = piece;
        this.board = board;
        this.available = false;
        this.id = Math.random();
    }

    isEmpty(): boolean {
        return this.piece === null;
    }

    isEnemy(target: Cell): boolean {
        if (target.piece) {
            return this.piece?.color !== target.piece.color;
        }

        return false;
    }

    isEmptyVerical(target: Cell): boolean {
        if (this.x !== target.x) {
            return false;
        }

        const min = Math.min(this.y, target.y);
        const max = Math.max(this.y, target.y);

        for (let y = min + 1; y < max; y += 1) {
            if (!this.board.getCell(this.x, y).isEmpty()) {
                return false;
            }
        }

        return true;
    }

    isEmptyHorizontal(target: Cell): boolean {
        if (this.y !== target.y) {
            return false;
        }

        const min = Math.min(this.x, target.x);
        const max = Math.max(this.x, target.x);

        for (let x = min + 1; x < max; x += 1) {
            if (!this.board.getCell(x, this.y).isEmpty()) {
                return false;
            }
        }

        return true;
    }

    isEmptyDiagonal(target: Cell): boolean {
        const absX = Math.abs(target.x - this.x);
        const absY = Math.abs(target.y - this.y);

        if (absX !== absY) return false;

        const dx = this.x < target.x ? 1 : -1;
        const dy = this.y < target.y ? 1 : -1;

        for (let index = 1; index < absY; index += 1) {
            if (!this.board.getCell(this.x + dx * index, this.y + dy * index).isEmpty()) {
                return false;
            }
        }

        return true;
    }

    setPiece(piece: Piece) {
        this.piece = piece;
        this.piece.cell = this;
    }

    addLostPiece(piece: Piece) {
        piece.color === Colors.BLACK
            ? this.board.lostBlackPieces.push(piece)
            : this.board.lostWhitePieces.push(piece);
    }

    movePiece(target: Cell) {
        if (this.piece && this.piece?.canMove(target)) {
            this.piece.movePiece(target);
            if (target.piece) {
                this.addLostPiece(target.piece);
            }
            target.setPiece(this.piece);
            this.piece = null;
        }
    }
}
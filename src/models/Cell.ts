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
}
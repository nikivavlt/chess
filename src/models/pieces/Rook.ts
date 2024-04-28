import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Piece, PiecesNames } from "./Piece";
import blackLogo from "../../assets/black-rook.png"
import whiteLogo from "../../assets/white-rook.png"

export class Rook extends Piece {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = PiecesNames.ROOK;
    } 

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;

        if (this.cell.isEmptyVerical(target)) return true; 
        if (this.cell.isEmptyHorizontal(target)) return true; 

        return false;
    }
}
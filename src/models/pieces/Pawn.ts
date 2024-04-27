import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Piece, PiecesNames } from "./Piece";
import blackLogo from "../../assets/black-pawn.png"
import whiteLogo from "../../assets/white-pawn.png"

export class Pawn extends Piece {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = PiecesNames.PAWN;
    }
}
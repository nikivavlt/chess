import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Piece, PiecesNames } from "./Piece";
import blackLogo from "../../assets/black-queen.png"
import whiteLogo from "../../assets/white-queen.png"

export class Queen extends Piece {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = PiecesNames.QUEEN;
    }  
}
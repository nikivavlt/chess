import { Cell } from "./Cell";
import { Colors } from "./Colors";

export class Board { 
    cells: Cell[][] = [];

    public initCells() {
        for (let index = 0; index < 8; index += 1) {
            const row: Cell[] = [];

            for (let indexTwo = 0; indexTwo < 8; indexTwo += 1) {
                if ((index + indexTwo) % 2 !== 0) {
                    row.push(new Cell(this, indexTwo, index, Colors.BLACK, null)) // Black
                } else {
                    row.push(new Cell(this, indexTwo, index, Colors.WHITE, null)) // White
                }
            }
            this.cells.push(row);   
        }
    }
}
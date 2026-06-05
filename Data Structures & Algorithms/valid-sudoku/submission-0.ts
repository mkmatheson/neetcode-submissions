class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowValues: Array<Set<number>> = [];
    const colValues: Array<Set<number>> = [];
    for(let i = 0; i < board.length; i++){
        rowValues[i] = new Set();
        colValues[i] = new Set();
    }
    const boxValues: {[key: string]: Set<number>} = {
        '0,0': new Set(),
        '0,1': new Set(),
        '0,2': new Set(),
        '1,0': new Set(),
        '1,1': new Set(),
        '1,2': new Set(),
        '2,0': new Set(),
        '2,1': new Set(),
        '2,2': new Set()
    }
    for(let rowIdx = 0; rowIdx < board.length; rowIdx++){
        for(let colIdx = 0; colIdx < board[0].length; colIdx++){
            const val = parseInt(board[rowIdx][colIdx]);
            console.log({val, rowIdx, colIdx})
            if(!isNaN(val)) {
                // add to row
                if(rowValues[rowIdx].has(val)){
                    return false
                } else {
                    rowValues[rowIdx].add(val);
                }
                // add to column
                if(colValues[colIdx].has(val)){
                    return false
                } else {
                    colValues[colIdx].add(val)
                }
                // add to box
                const boxCoordinate = `${Math.floor(rowIdx / 3)},${Math.floor(colIdx / 3)}`;

                if(boxValues[boxCoordinate].has(val)){
                    return false
                } else {
                    boxValues[boxCoordinate].add(val);
                }

            }
        }
    }
    return true;
    }
}

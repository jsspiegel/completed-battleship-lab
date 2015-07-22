var genEmptyBoard = function(){
    var localBoard = [];
    for(var i = 0; i < 8; ++i){
        localBoard.push([]);
        for(var j = 0; j < 8; ++j){
            localBoard[i].push(false);
        }
    }
    return localBoard;
}
var printBoard = function(){
    for(var i = 0; i < 8; ++i){
        console.log(board[i] + "\n");
    }
}

var battleInit = function(){
    totalShipCount = 0;
    board = genEmptyBoard();
    placeCluster();
    placeCluster();
    placeCluster();
    //printBoard();
}


var unusedGridPos = function(){
    var occupied = true;
    var col = null;
    var row = null;

    do {
        col = Math.floor(Math.random() * 8);
        row = Math.floor(Math.random() * 8);
    } while(board[row][col])
    return [row,col];

}

function getRandRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

var placeCluster = function(){
    var clusterSize = getRandRange(2,5);
    var pos = unusedGridPos();
    var startingSpace = {row: pos[0], col: pos[1]};
    board[startingSpace.row][startingSpace.col] = true;

    for(var i = 0; i < clusterSize - 1; ++i){
        totalShipCount++;
        var randColOffset;
        var randRowOffset;
        var totalRow;
        var totalCol;
        var proposedTileValue;
        do{
            do{
                randColOffset = getRandRange(-1,2);
                randRowOffset = getRandRange(-1,2);

                totalRow = startingSpace.row + randRowOffset;
                totalCol = startingSpace.col + randColOffset;
            } while (!(totalRow <= 7 && totalRow >= 0) || !(totalCol <= 7 && totalRow >= 0))

            proposedTileValue = (board[totalRow][totalCol]);

        } while (proposedTileValue);
        board[totalRow][totalCol] = true;
    }
};

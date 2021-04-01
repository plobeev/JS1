var board = {
    cellLettersArray : [" ","A","B","C","D","E","F","G","H"," "],
    cellNumbersArray : [" ","1","2","3","4","5","6","7","8"," "],
    whitePieces:[" ","&#9814;","&#9815;","&#9816;","&#9812;","&#9813;","&#9816;","&#9815;","&#9814;"," ",],
    whitePawns : "&#9817;",
    blackPawns : "&#9823;",
    blackPieces:[" ","&#9820;","&#9821;","&#9822;","&#9818;","&#9819;","&#9822;","&#9821;","&#9820;"," ",]
}

var chessBoard = document.createElement("table");
var tr, td;
document.querySelector("div").append(chessBoard);
for(var i=0; i<10; i++){
    tr = document.createElement("tr");
    chessBoard.append(tr);
        for(var j=0; j<10; j++){
            td = document.createElement("td");            
            filling(i,j);
            tr.append(td);
        }        
}


function filling (row,column){
    if ( row == 0 || row == 9){
        td.innerHTML = board.cellLettersArray[j];
    }    
    if ( column == 0 || column == 9){
        td.innerHTML = board.cellNumbersArray[i];
    }
    if ( column == 9 || row == 0 ){
        td.setAttribute("class", "rotateElement");
    }    

// colores------------------

    if ( column == 9 || column == 0 || row == 0 || row == 9  ){
        td.classList.add("borderCell");
    }
    if ( column >=1 && column <=8 && row >= 1 && row <=8 ){

        if ( column%2 == 0) {
            (row %2==0) ? (td.setAttribute("class", "innerCellBlack")) : (td.setAttribute("class", "innerCellWhite"));
            
        }
            else {
                (row %2==0) ? (td.setAttribute("class", "innerCellWhite")) : (td.setAttribute("class", "innerCellBlack"));
        }
        
// pieces------------------
        if(row==2){
            td.innerHTML = board.blackPawns;
        }
        if(row==1){
            td.innerHTML = board.blackPieces[column];
        }
        if(row==7){
            td.innerHTML = board.whitePawns;
        }        
        if(row==8){
            td.innerHTML = board.whitePieces[column];
        } 
    }
}


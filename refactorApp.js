var move = 'x'
var board = [[],[],[]];
var row = document.getElementById('table1').rows;

for(var i = 0; i < 3; i++){
  for(var j = 0; j < 3; j++){
    board[i].push(row[i].cells[j]);
  }
};


var row1 = document.getElementById('table1').rows[0].cells;
var row2 = document.getElementById('table1').rows[1].cells;
var row3 = document.getElementById('table1').rows[2].cells;




var result = document.getElementById('result');

function changeText(id){
  if(id.innerText === ""){
    
    id.innerHTML = move;
    
    if(move === 'x'){
      move = 'o';
      checkRows();
      checkMajorDiagonal();
      checkMinorDiagonal();
      // checkColumns();
      return;
    }
    
    if(move === 'o'){
      move ='x';
      checkRows();
      checkMajorDiagonal();
      checkMinorDiagonal();
      // checkColumns();
      return;
    }
    
  } else {
    alert('try different square!')
  }
  
  
}

function isInnerTextX(value){
  return value.innerText === 'x';//refactor it later with ||
};

function isInnerTextO(value){
  return value.innerText === 'o';
}

function checkRows(){
 
  for(var i = 0; i < 3; i++){
    
    if(Array.prototype.every.call(board[i], isInnerTextX)){
      alert("x wins");
      location.reload();
      
    }
    
    if(Array.prototype.every.call(board[i], isInnerTextO)){
      alert("o wins");
      location.reload();
      
    }
  }
  
}

function checkMajorDiagonal(){
  if( isInnerTextO(board[0][0]) && isInnerTextO(board[1][1]) && isInnerTextO(board[2][2]) ){
   alert("o wins");
   location.reload();
   
  }
 
  if( isInnerTextX(board[0][0]) && isInnerTextX(board[1][1]) && isInnerTextX(board[2][2]) ){
   alert("x wins");
   location.reload();
  }
 
}

function checkMinorDiagonal(){
  if( isInnerTextO(board[0][2]) && isInnerTextO(board[1][1]) && isInnerTextO(board[2][0]) ){
    alert("o wins");
    location.reload();
  
  }

  if( isInnerTextX(board[0][2]) && isInnerTextX(board[1][1]) && isInnerTextX(board[2][0]) ){
    alert("x wins");
    location.reload();
  }

}

function checkColumns(){
  
  
}
































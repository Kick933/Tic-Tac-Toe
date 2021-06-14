// IIFE to add eventlistener to the board.
(function (){
    // to reference user turn
    let userTurn = 1;
    // Defines BoardFill
    const boardFill = (function(){
    
        const add = function(idOfElement){
            if(userTurn == 1){
            document.getElementById(idOfElement).innerText = "X";
            userTurn = 2;
            }else{
            document.getElementById(idOfElement).innerText = "O"; 
            userTurn = 1;
            }
        }
        return {
            add,
        }
    
    })();
    //Adds eventListener to the board.
    for(let i =1 ; i<= 9; i++){
        document.getElementById(`${i}`).addEventListener('click',()=>{
            id= i;
            boardClick(id);
        });
    }
    // Handles click on an board segment. If already clicked, does nothing.
    // Else,adds "disabled" class and calls boardFil.add with argument as id.
    function boardClick(idOfElement){
        if(document.getElementById(idOfElement).classList.contains("disabled")){
        }else{
        document.getElementById(idOfElement).classList.add("disabled");
        boardFill.add(idOfElement);
        }
    }
})();
// IIFE to add eventlistener to the board.
(function (){
    // to reference user turn
    let userTurn = 1;
    let clickX = 0;// Number of inputs by player X
    let clickO =0; // Number of inputs by player O
    const message = document.getElementById("message");
    // Function to check victory
    function victoryCheck(id) {
        console.log(id)
        let result = [];
        function victoryAction(){
            if(userTurn == 2){
                message.innerText ="Player X Won.";
            }else if(userTurn == 1){
                message.innerText ="Player O Won."
            }
            for(let i = 1; i<=9; i++){
                id=i;
                document.getElementById(id).classList.add("disabled");
            }
        }
        // Checks for victory using Arrays and equality.
        // checks if atleast three inputs have been provided by the first player.
        if(clickX > 2){
        // Array to extract the results.
        for(let i=1; i <=9; i++){
            result.push(document.getElementById(i).innerText);
        }
        function checkEquality(a,b){
            if(a.length == b.length){
                for(let i=0; i<=a.length;i++){
                    if(a[i] != b[i]){
                        return false;
                    }
                    }
                    return true;
                
                }
            }
        }
        // For rows
        let r1 = [result[0],result[1],result[2]];
        let r2 = [result[3],result[4],result[5]];
        let r3 = [result[6],result[7],result[8]];
        // For columns
        let c1 = [result[0],result[3],result[6]];
        let c2 = [result[1],result[4],result[7]];
        let c3 = [result[2],result[5],result[8]];
        //For Cross lines
        let cross1 = [result[0],result[4],result[8]];// With Falling slope.
        let cross2 = [result[2],result[4],result[6]];// With climbing Slope.
        //check for victory using pattern.
        let userO = ['O','O','O'];
        let userX = ['X','X','X'];
        //Checking for victory.
        if(userTurn == 2){// Chekcs for Player X if he clicked last
            let check = userX;
            if(id == 1){
                if(checkEquality(r1,check) || checkEquality(c1,check) || checkEquality(cross1,check)){
                    victoryAction();
                }
            }else if(id == 2){
                if(checkEquality(r1,check) || checkEquality(c2,check)){
                    victoryAction();
                }
            }else if(id == 3){
                if(checkEquality(r1,check) || checkEquality(c3,check) || checkEquality(cross2,check)){
                    victoryAction();
                }
            }else if(id == 4){
                if(checkEquality(r2,check) || checkEquality(c1,check)){
                    victoryAction();
                }
            }else if(id == 5){
                if(checkEquality(r2,check) || checkEquality(c2,check) ||
                 checkEquality(cross1,check) || checkEquality(cross2,check)){
                    victoryAction();
                }
            }else if(id == 6){
                if(checkEquality(r2,check) || checkEquality(c3,check)){
                    victoryAction();
                }
            }else if(id == 7){
                if(checkEquality(r3,check) || checkEquality(c1,check) || checkEquality(cross2,check)){
                    victoryAction();
                }
            }else if(id == 8){
                if(checkEquality(r3,check) || checkEquality(c2,check)){
                    victoryAction();
                }
            }else if(id == 9){
                if(checkEquality(r3,check) || checkEquality(cross1,check) || checkEquality(c3,check)){
                    victoryAction();
                }
            }
        }else if(userTurn == 1){// Checks for player O
            let check = userO;
            if(id == 1){
                if(checkEquality(r1,check) || checkEquality(c1,check) || checkEquality(cross1,check)){
                    victoryAction();
                }
            }else if(id == 2){
                if(checkEquality(r1,check) || checkEquality(c2,check)){
                    victoryAction();
                }
            }else if(id == 3){
                if(checkEquality(r1,check) || checkEquality(c3,check) || checkEquality(cross2,check)){
                    victoryAction();
                }
            }else if(id == 4){
                if(checkEquality(r2,check) || checkEquality(c1,check)){
                    victoryAction();
                }
            }else if(id == 5){
                if(checkEquality(r2,check) || checkEquality(c2,check) ||
                 checkEquality(cross1,check) || checkEquality(cross2,check)){
                    victoryAction();
                }
            }else if(id == 6){
                if(checkEquality(r2,check) || checkEquality(c3,check)){
                    victoryAction();
                }
            }else if(id == 7){
                if(checkEquality(r3,check) || checkEquality(c1,check) || checkEquality(cross2,check)){
                    victoryAction();
                }
            }else if(id == 8){
                if(checkEquality(r3,check) || checkEquality(c2,check)){
                    victoryAction();
                }
            }else if(id == 9){
                if(checkEquality(r3,check) || checkEquality(cross1,check) || checkEquality(c3,check)){
                    victoryAction();
                }
            }
        }
    }

    // Defines BoardFill
    const boardFill = (function(){
        const add = function(idOfElement){
            if(userTurn == 1){
            document.getElementById(idOfElement).innerText = "X";
            userTurn = 2;
            clickX++;
            }else{
            document.getElementById(idOfElement).innerText = "O"; 
            userTurn = 1;
            clickO++;
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
            victoryCheck(id);
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
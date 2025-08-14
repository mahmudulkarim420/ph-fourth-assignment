function totalFine(fare){
    if(typeof fare !== "number" || fare <= 0){
        return "Invalid";
    }
    let surcharge = fare * 0.20;

    let total = fare + surcharge + 30;

    return total;
}




function onlyCharacter(text){
    if(typeof text !== "string"){
        return "Invalid";
    }

    let result = "";

    for(const words of text){
        if(words !== " "){
            result += words.toUpperCase();
        }
    }
    return result;
}





function bestTeam(player1, player2){
    if(typeof player1 !== "object" || typeof player2 !== "object"){
        return "Invalid";
    }

    let player1TotalPoints = player1.foul + player1.cardY + player1.cardR;

    let player2TotalPoints = player2.foul + player2.cardY + player2.cardR;

    if(player1TotalPoints < player2TotalPoints){

        return player1.name;

    }else if(player2TotalPoints < player1TotalPoints){

        return player2.name;

    }else{

        return "Tie";
    }
}







function isSame(arr1, arr2){
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid";
    }

    if(arr1.length !== arr2.length){
        return false;
    }

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }

    return true;
}




function resultReport(marks){
    if(!Array.isArray(marks)){
        return "Invalid";
    }

    let total = 0;
    let pass = 0;
    let fail = 0;

    for(let mark of marks){
        total += mark;
        if(mark >= 40){
            pass++
        }else{
            fail++
        }
    }

    let finalScore = Math.round(total / marks.length);

    if(isNaN(finalScore)){
        finalScore = 0;
    }

    return {finalScore, pass, fail};
}
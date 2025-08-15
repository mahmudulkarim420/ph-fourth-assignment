function bestTeam(player1, player2){
    if(typeof player1 !== "object" || Array.isArray(player1) || typeof player2 !== "object" ||  Array.isArray(player2)){

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
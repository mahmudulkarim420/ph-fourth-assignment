function totalFine(fare){
    if(typeof fare !== "number" || fare <= 0){
        return "Invalid";
    }
    let surcharge = fare * 0.20;

    let total = fare + surcharge + 30;

    return total;
}


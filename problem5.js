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
    }else{
        Math.round(finalScore)
    }

    return {finalScore, pass, fail};
}

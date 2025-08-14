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
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy",function laugh(num){
    var line = "";
    for (var i = 0; i < num; i ++){
        line += "ha";
    }
    return line + "!";
});

// GET computer choice
function getComputerChoice(){
    return Math.floor(Math.random() * 3) + 1;
}

//GET human choice
function getHumanChoice(){
    return prompt("Enter your weapon", "here");
}


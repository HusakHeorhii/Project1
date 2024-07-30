const countLabel = document.getElementById("countLabel");
const numReset = document.getElementById("numReset");
const numDecrease = document.getElementById("numDecrease");
const numIncrease = document.getElementById("numIncrease");
let count = 0;

numIncrease.onclick = function(){
    count++;
    countLabel.textContent = count;
}
numDecrease.onclick = function(){
    count--;
    countLabel.textContent = count;
}
numReset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
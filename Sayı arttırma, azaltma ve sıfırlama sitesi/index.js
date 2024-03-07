const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
} //"increase" butonu ile sayı arttırma

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
} //"decrease" butonu ile sayı azaltma
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
} //"reset" butonu ile sayıyı sıfırlama

const increasebtn = document.getElementById('increase_btn');
const decreasebtn = document.getElementById('decrease_btn');
const resetbtn = document.getElementById('reset_btn');
const countinglabel = document.getElementById('counting_label');
let count = 0;
increasebtn.onclick = function (){
    count++;
    countinglabel.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countinglabel.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countinglabel.textContent = count;
}
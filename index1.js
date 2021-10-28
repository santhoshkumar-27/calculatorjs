var fvalue = document.getElementById('fvalue').value;
var svalue = document.getElementById('svalue').value;
console.log(fvalue)
let val1 = parseInt(fvalue);
let val2 = parseInt(svalue);
var result;
function add() {
    result = val1 + val2;
    console.log(result)
    document.getElementById('fr').innerHTML = result.innerHTML ;
}
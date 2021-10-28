const $fValue = document.getElementById('fvalue');
const $sValue = document.getElementById('svalue');

var val1;
var val2;
$fValue.addEventListener('keypress', (e) => {
    if (e.code === 'Enter' && e.target.value != "") {
        val1 = parseInt(e.target.value);
        console.log(val1)
        $fValue.value = "";
    }
});
$sValue.addEventListener('keypress', (e) => {
    if (e.code === 'Enter' && e.target.value != "") {
        val2 = parseInt(e.target.value);
        console.log(val2)
        $sValue.value = "";
    }
})

// let result;
// result= val1 + val2;
// console.log(result)
// document.getElementById('fr').innerHTML = result.innerHTML;

var rslt;
function add() {
    rslt = val1 + val2;
}
function sub() {
    result2 = val1 - val2;
}
function mul() {
    rslt = val1 * val2;
}
function div() {
    rslt = val1 / val2;
}


function res() {
    document.getElementById("ab").innerText = rslt.innerText;
    console.log(rslt);
}

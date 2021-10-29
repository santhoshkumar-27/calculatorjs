const $fValue = document.getElementById('fvalue');
const $sValue = document.getElementById('svalue');
const $output = document.getElementById('result');

var val1;
var val2;
$fValue.addEventListener('keypress', (e) => {
    if (e.code === 'Enter' && e.target.value != "") {
        val1 = parseInt(e.target.value);
        console.log(val1);
        $fValue.value = "";
    }
});
$sValue.addEventListener('keypress', (e) => {
    if (e.code === 'Enter' && e.target.value != "") {
        val2 = parseInt(e.target.value);
        console.log(val2);
        $sValue.value = "";
    }
})

var rslt;
function add() {
    rslt = val1 + val2;
    console.log(rslt);
}
function sub() {
    rslt = val1 - val2;
    console.log(rslt);
}
function mul() {
    rslt = val1 * val2;
    console.log(rslt);
}
function div() {
    rslt = val1 / val2;
    console.log(rslt);
}

const $btt = document.getElementById('rsbtt');
$ptag = document.createElement('p');

$btt.addEventListener('click', (e) => {

    if (e.target.innerText === "result" && rslt !== "") {

        $ptag.innerText = `${rslt}`;
        $output.appendChild($ptag);
    }

})

const $clrbtt = document.getElementById('clrbtt');

$clrbtt.addEventListener('click', (e) => {
    console.log(e)
    if (e.target.innerText === "clear" && rslt!= "") {
        $output.removeChild($ptag);
    }
})
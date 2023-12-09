let display = document.getElementById('display');

function showNum(value) {

    display.value += value;

}

function ClearDisplay() {

    display.value = '';

}

function showResult() {

    display.value = eval(display.value);

}
function numDelete() {
    
    display.value = display.value.toString().slice(0,-1);

}



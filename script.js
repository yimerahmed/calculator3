
let display=document.getElementById("display")
// let numValue=document.getElementsByClassName("numValue")
function press(num) {
    if (display.value == 0) {
        display.value=""
    }
    display.value = display.value + num;
}


function clearValue() {
  display.value = 0;
}


function equal() {
    
    try {
        let result = eval(display.value);
    display.value = result;
    }
    catch(error) {
        display.value = "Error";
    }
}


function deleteValue (){
    let currentValue = display.value;
    display.value=currentValue.slice(0,-1)
}


function square() {
display.value = Math.pow(display.value, 2);
}


function cube() {
  display.value = Math.pow(display.value, 3);
}

function squareroot() {
  display.value = Math.sqrt(display.value);
}

function percentage() {
  display.value = (display.value/100);
}

function logarithm() {
    display.value=Math.log10(display.value)
}

function lan() {
  display.value = Math.log(display.value);
}

function sin() {
  display.value=Math.sin(display.value * (Math.PI / 180))
}
function cos() {
  display.value=Math.cos(display.value * (Math.PI / 180))
}

function tan() {
  display.value=Math.tan(display.value * (Math.PI / 180))
}
function asin() {
  display.value = Math.asin(display.value * (180 / Math.PI));
}
function acos() {
  display.value = Math.acos(display.value * (180 / Math.PI));
}
function atan() {
  display.value = Math.atan(display.value * (180 / Math.PI));
}
function pi() {
  display.value = Math.PI;
}


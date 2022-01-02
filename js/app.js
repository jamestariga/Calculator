const num = (val) => {
    document.getElementById('calc').value += val;
}

const equal = () => {
    let input = document.getElementById('calc').value;
    let output = eval(input);
    document.getElementById('calc').value = output;
}

const clr = () => {
    document.getElementById('calc').value = '';
}

const del = () => {
    let bksp = document.getElementById('calc').value;
    document.getElementById("calc").value = bksp.substring(0,bksp.length-1);
}

var val = 5 + 0;
var val2 = 5 + 60;

document.getElementById("first").innerHTML = val;


if (val < 10) {

    document.getElementById('box').style.backgroundColor = 'red';
} else {
    document.getElementById('box').style.backgroundColor = 'green';
}

if (val2 < 10) {

    document.getElementById('box2').style.backgroundColor = 'red';
} else {
    document.getElementById('box2').style.backgroundColor = 'green';
}
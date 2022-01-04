var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById('subtrair').addEventListener("click", function () {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
})

document.getElementById('adicionar').addEventListener("click", function () {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
})


/*function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}*/


function filtraPares(arr) {
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0;
}

const Array = [1, 4, 7, 10, 15, 32, 100, 178, 66];

console.log(filtraPares(Array));
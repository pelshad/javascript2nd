const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let sum = 0;

arr.forEach(item => {
    if(item < 70){
        sum += item;
    }
})

console.log(sum);
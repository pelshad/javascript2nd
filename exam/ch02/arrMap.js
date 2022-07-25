//filter와 달리 값 변경 o, 길이 변경 x 
const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

const arr2 = arr.map(item => {
    return item+2;
})

console.log(arr2);

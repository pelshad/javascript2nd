const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];
let odd = 0, even = 0;

arr.forEach(item => { //continue문 사용 불가
    if(item % 2 === 0){
        even += item;
    } else {
        odd += item;
    }

    // 3항식 (item % 2 === 0) ? even += item : odd += item;
})

console.log(odd);
console.log(even);


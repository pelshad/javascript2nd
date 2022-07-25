//코드 실행
console.log('잘됨');
//ctrl + alt + n 코드 실행, (code runner 설치 해야됨)

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]; //(*추천)여러 종류의 타입을 쓸때는 객체를 활용

//배열에서 값을 바꾸는 방법
    arr[0] = 11; //arr의 0번방(10)을 11로 바꿈
    arr[0]++     //arr 0번방(11)을 +1함
    console.log(arr[0]);

//배열에서 값 출력
    //for문 활용
    for(let i=0; i<arr.length; i++){
        console.log(`arr[${i}] : ${arr[i]}`);
    }

    //배열 활용
    //ver.1 function문
    arr.forEach(function(item){
    })
    //ver.2 =>function문
    arr.forEach(item => { //파라미터가 1개일 경우 ()생략가능, 2개 이상이면 (item, idx)와 같이 사용
        console.log(item);
    })

    //mission

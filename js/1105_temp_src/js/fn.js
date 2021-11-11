
//console.log("fn.js 입니다.");

//console.log(name);
let name = "홍길동";
let flag = 3 < 8;
let now = new Date();
let num = 99;
const PI = 3.14;

function f1() {
   return prompt("이름을입력하세요","홍길동");
}

const f2 = f1;

const f3 = () => alert("hello");
const f4 = (i) => alert(i);

function sum(a, b, c) {
    if (!c) c = 0;
    return a + b + c;
}

function sumAll() {
    let sum = 0;
    for (let i = 0; i<arguments.length;i++){
        sum += arguments[i];
    }

    return sum;
}

function small(a, b) {
    if (a > b) return b;
    else return a;
}

const min = (a, b) => a > b ? b : a;



function callTenTimes(fn) {
    for (let i = 0; i<10;i++){
        try {
            fn();
        } catch (error) {
            alert("함수 이름을 넘겨 주세요..")
        }
    }
}

//let a = 0;
//callTenTimes(a);

// callTenTimes(function () {
    //     console.log("~~~~~~~~~~~~~~~");
    // });
    
    // callTenTimes( () =>   console.log("~~~~~~~www~~~~~~~~") );
//let fc;
//callTenTimes(fc =  () =>   console.log("~~~~~~~fcfc~~~~~~~~") );
    
function callback() {
    console.log("callback");
}

//let interId = setInterval(callback, 3000);

// setTimeout(() => {
//     clearInterval(interId);
//    // location.href = "http://www.naver.com";
// }, 10000);


function fa() {
    let data = 0;
    function inner() {
        return ++data;
    }
    return inner;
}

let ff1 = fa;
let ff2 = fa();

ff1()();
ff1()();
ff1()();

ff2();
ff2();
ff2();


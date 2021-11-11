
let array = ['가', '바', '나', '하'];

//array.pop();
//array.push('A');
//array[2] = '~~~~~~';

// array.forEach(i=>console.log(i));
// array.forEach(i=>document.write("<h3>"+i+"</h3>"));

// array.filter(i => i > '나').forEach(i => alert(i));

//자바스크립트 객체 : 싱글톤 
let student = {
    name: "홍길동",
    ko: 99,
    eng: 98,
    sum: function () {
        return this.ko + this.eng;
    },
    avg: function () {
        return this.sum() / 2;
    }
};
student.name
student["name"]
student.avg()

student.address = '서울';
//delete student.sum;


for (let data in student){
   // alert(data);
   //console.log(student[data]); O
   //console.log(student.data);  X

}

let books = [
    { title: "java", price: 23000 },
    { title: "sql", price: 24000 },
    { title: "html5", price: 13000 },
    { title: "js", price: 21000 }
];
//books[2].price
//books[2]["price"]

for (let data in books){
    //console.log(books[data]);
}

for (let data of books){
   // console.log(data.title+","+data.price);
}


//자바스크립트 객체 : 생성자 함수  
//함수 : prototype 공유하도록 설계 
function Student(name, ko, eng) {
    this.name = name;
    this.ko = ko;
    this.eng = eng;
    
}


Student.prototype.sum = function () {
    return this.ko + this.eng;
}

Student.prototype.avg = function () {
    return this.sum()/2;
}

let s1 = new Student("홍길동",89,99);
let s2 = new Student("고길동",99,99);
let s3 = new Student("김길동",89,100);

s1.avg()
s2.avg()
s3.avg()

// s1.grade = function () {
//     return this.avg() > 80 ? 'A' : 'B';
// }

Student.prototype.grade = function () {
    return this.avg() > 80 ? 'A' : 'B';
}

let students = [
    new Student("홍길동",89,99),
    new Student("고길동",99,99),
    new Student("김길동",89,100)
];

students.forEach(i => console.log(i.name+":"+i.grade()));

for (let data of students){
    console.log(data.name+" : "+data.grade());
}

let sss = students[0];
sss.eng = 0;




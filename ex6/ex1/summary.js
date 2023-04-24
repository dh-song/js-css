function download(){
    return [2,4,3];
}
 let result = download();
 console.log(result);

// -----------------정규식------------
let html = `<div>
            <h1>hello</h1>
            <ul>
                <li>okay<li>
                <li>
                <b>bye</b>
                <li>
            </ul>
            </div>`;
let str = `<hello> good hoho 7821
        haha bye 3273
        nanana <noohoo>`;
let exp = /<[a-o]+>|[1-5]+/g;
let exp1 = /<\w+>.+<\w+>+/g;
let st = str.match(exp1);
console.log(st); 


// let ph = "010-1232-16062323";
// let exp = /^01[016789]-\d{3,4}-\d{4}$/;
// // ^ 시작 $끝
// console.log(exp.test(ph));
// serch, test, replace, exec


// ------------------심볼로 구현------------ 
// let exam = {
// kor : 10,
// eng : 20,
// math : 30,
//     *[Symbol.iterator](){
//         yield this.kor;
//         yield this.eng;
//         yield this.math;
//     }
// }

// for (let i of exam) {
//     console.log(i);
// }

// let lotto={
//     *[Symbol.iterator](){ // * 쓰면 제너레이터가 자동 완성
    
//     let nums=[2,13,24,21];
//     // let index=0;

//     for (let index = 0; index < nums.length; index++) {
//         yield nums[index[i]];
        
//     }
//     // yield nums[index++];
//     // yield nums[index++];
//     // yield nums[index++];
//     // yield nums[index++];
//     // yield nums[index++];
//     }
// };
// for (let n of lotto) {
//         console.log(n);
//     }


//---------------심볼 이용해서 이터레이터 구현 ---------------
// let lotto={
//     [Symbol.iterator](){
    
//     let nums=[2,13,24,21];
//     let index=0;
//         return{
//             next(){
//                 return {
//                     done: index==4?true:false,
//                     value:nums[index++]
//                 }
//             }
//         }
//     }
// };
//이터레이터를 따로 만들어서 심볼 이터레이터로 명 해주면 오버라이드 느낌으루다가 구현이되고 반복문 가능

// let it = lotto.values();
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);
// console.log(it.next().value);

// for (let n of lotto) {
//     console.log(n);
// }


// ------------------심볼 활용 인터페이스 정의--------------

// let examSymbol = {
//     total : Symbol(),
//     avg : Symbol()
// };

// class Exam{
//     constructor(){
//         this.kor = 20;
//         this.eng = 30;
//         this.math = 40;

//     }
//     [examSymbol.total](){
//         return this.kor + this.eng + this.math;
//     }
//     avg(){
//         return this.total()/3;
//     }
// }
// let exam = new Exam();
// // exam.total();
// let result = exam[examSymbol.total]();
// console.log(result);


// ----------------------------------------------
// let s = Symbol(); //고유 이름 인터페이스

// let exam = {kor:10, eng:20, math:30, 
//     [s](){
//     return this.kor+ this.eng + this.math;
//     }
// }
    
//     console.log(exam[s]());



// spread Operator
// function x(x,y,z){
//     console.log(`x: ${x}, y: ${y}`);
// }
// let ar = [2,3,4];
// x(...ar);

//template string
// let kor = 30;
// let eng = 40;
// let msg = String.raw`\\<span>
//                     yay~
//                     </span>\\`;

// let template = `kor:${kor}, eng:${eng}, msg:${msg}`;
// console.log(template);

// -------------------- obj 리터럴-----------------------
// let kor = 1;
// let eng = 2;
// let math = 3;
// let obj = {
//     kor:kor,
//     eng:eng,
//     math:math,
//     total:function(){
//         return this.kor + this.eng + this. math;

//     },
//     "to-string":function(){
//         console.log("obj");
//     }
// }
// let enhObj = {kor,eng,math,
//     total(){
//         return this.kor + this.eng + this. math;
//     },
//     "to-string":function(){
//         console.log("obj");
//     },
//     [comname]:function(){
//         console.log("enhobj com");
//     }


// }; 변수명 만으로 키와 값을 할당
//------------class-----------------
// class Exam{
//     #kor
//     #eng
//     #math
//     constructor(kor=0, eng=0, math=0){
//         this.#kor = kor;
//         this.#eng = eng;
//         this.#math = math;
//     }
//     set kor(kor){
//         this.#kor = kor;
//     }

//     get kor(){
//         return this.#kor;
//     }
//         total(){
//             return this.#kor + this.#eng + this.#math;
//         }
//         avg(){
//             return this.total()/3;
//         }
//     }

// class NewExam extends Exam{
//     constructor(kor=0, eng=0, math=0,com=0){
//         super(kor,eng,math);
//         this.com = com;
//     }
//     total(){
//         return super.total() + this.com;
//     }
//     #test(){
//         console.log("private");
//     }
// }
// let exam = new NewExam(1,1,1,1);

// console.log(exam.total())
// exam.test;
// exam.kor = 10;
// console.log("get" +exam.kor);

// "use strict"
// x = 20;
// this.x = 30;
//------------class-----------------


//------------화살표 함수-----------------
// setTimeout(() => {
//     console.log(x);
// }, 3000);

// setTimeout(function () {
//     console.log(arguments.length);
//     console.log(x);
// }, 3000);

// class test {
//     constructor(){

//         this.x=10;

//         setTimeout(() => {
//             console.log(this.x);
//         }, 3000);

        
//         setTimeout( function(){
//             console.log(this.x);
//         }, 3000);
//     }
// }

// new test();


// let f1 = function () {
//     console.log("test1");
// }

// let f2 = () => {
//     console.log("test2");
// }
//1

// let input1 = document.querySelector("#input1")
// let div1 = document.querySelector("#div1")

// input1.addEventListener('blur', ()=> div1.textContent = input1.value);

//2

// let input21 = document.querySelector(".input2");
// let input22 = document.querySelector(".input3");
// let input23 = document.querySelector(".input4");
// let div2 = document.querySelector("#div2");
// let button2 = document.querySelector("#button2");
// let sum = 0;

// button2.addEventListener('click', ()=> {
//     div2.textContent += +input2.value + +input3.value + +input4.value;
// });

//3

// let input5 = document.querySelector(".input5");
// let div3 = document.querySelector("#div3");

// input5.addEventListener('blur', ()=> {
//     let elemSum = input5.value.split("").map(Number).reduce(function(sum, elem) {
//         return sum + elem;
//     }, 0);
//     div3.textContent = elemSum;
// });

//4

// let input6 = document.querySelector(".input6");
// let div4 = document.querySelector("#div4");

// input6.addEventListener('blur', ()=> {
//     let elemSum = input6.value.split("").map(Number).reduce(function(sum, elem) {
//         return sum + elem;
//     }, 0);
//     let  val = input6.value;
//     div4.textContent = elemSum / val.length;
// });

//5
// let input7surn = document.querySelector(".input7surn");
// let input8 = document.querySelector(".input8");
// let input9 = document.querySelector(".input9");
// let input10 = document.querySelector(".input10");


// input7surn.addEventListener('blur', ()=> {
//     let surn = input7surn.value.split(" ");
//     input8.value = surn[0]
//     input9.value = surn[1]
//     input10.value = surn[2]
// })


//6

// let input11 = document.querySelector(".input11");

// input11.addEventListener('blur', ()=> {
//     let arr = input11.value.split(" ");
//     let res = arr.map(function(elem){
//         elem = elem.slice(0, 1).toUpperCase() + elem.slice(1);
//         return elem;
//     });
//     input11.value = res.join(" ");
// });

//7

// let input12 = document.querySelector(".input12");
// let div7 = document.querySelector(".div7");

// input12.addEventListener("blur", ()=>{
//     let arr = input12.value.split(" ");
//     div7.textContent = arr.length;
// });

//8

// let input13 = document.querySelector(".input13");

// input13.addEventListener("blur", ()=>{
//     let date = input13.value.split('.');
//     console.log(date);
//     input13.value = date.reverse().join('-');
// });

//9
// let input14 = document.querySelector(".input14");
// let div9 = document.querySelector(".div9");

// input14.addEventListener("blur", ()=>{
//     let str = input14.value;
//     if( str === str.split('').reverse().join('')){
//         div9.textContent = 'true';
//     } else {
//         div9.textContent = 'false';
//     };
// });

//10

// let input15 = document.querySelector(".input15");
// let div10 = document.querySelector(".div10");

// input15.addEventListener("blur", ()=>{
//     let arr = input15.value.split("");
//     div10.textContent = arr.some((elem)=> elem === '3');
// });

//11

// let div11 = document.querySelectorAll(".div11");
// let button11 = document.querySelector(".button11");

// button11.addEventListener("click", ()=>{
//     let n = 1;
//     for (div of div11){
//         div.textContent = n;
//         n++;
//     };
// })

//12

// let sil12 = document.querySelectorAll(".sil12");
// let button12 = document.querySelector(".button12");

// button12.addEventListener('click', ()=>{
//     for (let elem of sil12){
//         elem.innerHTML = elem.innerHTML + '(' + elem.href + ')';
//     }

// });

//13

// let sil13 = document.querySelectorAll(".sil13");
// let button13 = document.querySelector(".button13");

// button13.addEventListener('click', ()=> {
//     for (let elem of sil13){
//         if (elem.href.includes('http://')){
//             elem.innerHTML = elem.innerHTML + '→';
//         }
//     }
// });

//14

// let div14 = document.querySelectorAll(".div14");

// for(let elem of div14){
//     elem.addEventListener('click', ()=> elem.textContent = (Number(elem.textContent))**2);
// }

//15
// let input16 = document.querySelector('.input16');

// input16.addEventListener('blur', ()=>{
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let date = input16.value.split('.').reverse().join(",");
//     let newdate = new Date(date);
//     console.log(newdate);
//     let day = newdate.getDay();
//     console.log(days[day]);
//     console.log(day);
// });

//16

// let input17 = document.querySelector('.input17');
// let input17plus = document.querySelector('.button17plus');
// let button17minus = document.querySelector('.button17minus');

// button16plus.addEventListener('click', ()=>{
//     input17.value = +input17.value + 1;
// });
// button16minus.addEventListener('click', ()=>{
//     input17.value = +input17.value - 1;
// });

//17

// let input18 = document.querySelector('.input18');
// let div17 = document.querySelectorAll('.div17');
// let n17 = 0;
// for (let elem of div17){
//     elem.addEventListener('click', ()=> {
//         n17++;
//         input18.value = n17;
//     });
// }

//18

// let div18 = document.querySelectorAll('.div18');
// let button18 = document.querySelector('.button18');

// button18.addEventListener('click', ()=>{
//     for(let elem of div18){
//         elem.innerHTML = elem.textContent.slice(0,9) + '...';
//     };
// });
    
//19

// let input19 = document.querySelector('.input19');
// let button19 = document.querySelector('.button19');

// button19.addEventListener('click', ()=>{
//     let arr = [];
//     let n = 0;
//     let letters = 'СпартакЗенитЦСКАЛокомотивАхматРостовКраснодарРубин'
//     for (let i = 0; i < 8; i++){
//         n = Math.floor(Math.random() * letters.length);
//         let str = letters.charAt(n);
//         arr.push(str);
//     };
//     input19.value = arr.join('');
// });

//20

// let input20 = document.querySelector('.input20');
// let button20 = document.querySelector('.button20');

// button20.addEventListener('click', ()=>{
//     let str = input20.value;
//     let arr = [];
//     for (let i = str.length; i > 0; i--){
//         let n = Math.floor(Math.random() * str.length);
//         console.log(n);
//         arr.push(str.charAt(n));
//         str = str.slice(n);
//     };
//     input20.value = arr.join('');
// });

//21

// let input21far = document.querySelector('.input21far');
// let button21 = document.querySelector('.button21');
// let div21 = document.querySelector('.div21');

// button21.addEventListener('click', ()=>{
//     let far = input21far.value;
//     let celc = (far - 32) * 5 / 9;
//     div21.textContent = celc;
// });

//22

// let input22fac = document.querySelector('.input22fac');
// let button22 = document.querySelector('.button22');
// let div22 = document.querySelector('.div22');

// button22.addEventListener('click', ()=> {
//     let num = Number(input22fac.value);
//     console.log(num);
//     let res = 1;
//     for (let i = 1; i < num+1; i++){
//         res *= i;
//         console.log(i);
//     };
//     div22.textContent = res;
// });


//23

let inputa = document.querySelector('.inputa');
let inputb = document.querySelector('.inputb');
let inputc = document.querySelector('.inputc');

let button23 = document.querySelector('.button23');
let div23 = document.querySelector('.div23');

button23.addEventListener('click', ()=> {
    let a = inputa.value;
    let b = inputb.value;
    let c = inputc.value;
    let dis = (b**2) - (4*a*c);
    console.log(dis);
    if(dis < 0){
        div23.textContent = 'нет корней';
    } else if (dis === 0){
        console.log('работает')
        let x = -b / (2*a);
        div23.textContent = 'x = ' + x;
    } else if (dis > 0){
        console.log('тоже работает')
        let x1 = (-b + Math.sqrt(dis)) / (2*a);
        let x2 = (-b - Math.sqrt(dis)) / (2*a);
        div23.textContent = 'x1 = ' + x1 + ' x2 = ' + x2;
    };
});
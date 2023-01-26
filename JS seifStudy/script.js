// var firstName, lastName, height, weight, BMI, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z;


// firstName= prompt('What is your first Name?');
// lastName= prompt('What is your Last name? ');
// height= prompt('Height?');
// weight= prompt('weight?');
// BMI = weight/ (height**2);

// console.log('My full name is  '+firstName+ " "+lastName+". "+BMI);

// function show() {
//     document.getElementById('display').innerHTML = firstName +" "+ lastName+", My BMI is "+BMI;
// }
// alert('Hi!,'+firstName+' Your BMI is '+weight*height)

// // i else commandsddddddddddddddddddddddddddddddddddddddddddd//



// a = prompt("k value");
// b = prompt('l value');
// if (k * m == 0) {
//     console.log('error');
// }


// else if (l < 0) {
//     console.log('error');
// }
// else if (l > k) {
//     console.log('l greater');
// }
// else if (k > l) {
//     console.log('k greater');
// }
// else if (k == l) {
//     console.log('l and k equal');
// }


// else {
//     alert('Input error');
// }
// //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm//

// //logical operators



// a = prompt('First Number');
// b = prompt('second Number');

// a >= 0 && a > b ? console.log('A is greater to B- ' + a + '>' + b) : console.log();
// b >= 0 && b > a ? console.log('B is greater to A- ' + a + '<' + b) : console.log();
// a >= 0 && b >= 0 ? console.log() : alert("Input Error");
// a == b || a <= 0 || b <= 0 ? console.log('Not Valid') : console.log();
// a == 0 && b == 0 ? alert('Undefined') : console.log(); 


// //lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
// //winning team//



// a = Number(prompt("Scode 1 SL"));
// b = Number(prompt("Scode 2 SL"));
// c = Number(prompt("Scode 3 SL"));
// g = (a + b + c) / 3;
// a = parseFloat(prompt("Scode 1 ENG"));
// b = parseFloat(prompt("Scode 2 ENG"));
// c = parseFloat(prompt("Scode 3 ENG"));
// h = (a + b + c) / 3;

// console.log('Sl average ' + g);
// console.log('ENG average ' + h);

// g > h ? console.log("SL wins " + g) : console.log("Eng wins " + h);
// g == h ? console.log('Match draw') : console.log();

// //jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj//

// //Functions//

// a = Number(prompt('your birth year?'));

// function age(a) {
//     var b = 2022 - a;
//     console.log('I am '+b+' years old.');
//     //document.getElementById('ager').innerHTML = 'I am '+b+ ' years old';
// }
// age(a);
// //mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm//

// let score = [320, 650, 540, 320, 456, 560];
// let team = ['Eng', 'Sl', 'ind', 'Pak', 'Wi'];

// console.log(team[3] + ' Scored ' + score[2] + ' against ' + team[4] + '.');





// if (team.indexOf('Aus')===-1) {
//     console.log('Australia acored '+ score[5]);
// }
// else {
//     console.log('Australia never played');
// }
// team[team.length] = 'Aus';
// //jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

// var bill =Number(prompt('Bill?'));
// function tipCal(bill) {
//     var tip;
//     if (bill <= 1000) {
//         tip =bill * 0.2;
//     }
//     if (bill > 1000 && bill <= 1500) {
//         tip = bill * 0.15;
//     }
//     else{
//         tip = bill * 0.1;
//     }

//    return tip+bill;
// }

// console.log('Bill No.1 + tips = '+tipCal(bill)+'$');
// console.log('Bill No. + tips = '+tipCal(900)+'$');
// console.log('Bill No.3 + tips = '+tipCal(1700)+'$');

// //kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// ///object

// let students={
//     name: 'Gihan',
//     grade:'grade2',
//     Age:23,
//     examPassed: false,
//     //subjects: new Array(),
//     subjects: ['physi','chemist'],
//     grdclass:{
//         grade1: "passed",
//         grade2:'faild',
//         grade3:"didnot start",
//     }
// }
// students.subjects.push('physics','chemistry');
// console.log(students);

// //bmi with objects

// var health={
//     Name: ['Kasun', 'Gihan'],
//     height:[165,173],
//     weight:[62,66],
// bmis: new Array(),

// calBmi: function(waight,haight){
//     var bmi;
//     bmi= waight/(haight**2);
//     this.bmis.push(bmi);
//     return bmi;
// }

// }
// console.log( 'BMI of '+health.Name[0]+' is '+health.calBmi(health.height[0], health.weight[0]));
// console.log( 'BMI of '+health.Name[1]+' is '+health.calBmi(health.height[1], health.weight[1]));
// //health.bmis.push('health.bmi');
// console.log(health);

// //ggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
// //BMI Calculator with objects

// var Kasun = new Object();
// var Gihan = new Object();

// Kasun.height = Number(prompt('Height of Kasun? '));
// Kasun.weight = Number(prompt('weight of Kasun? '));
// Gihan.height = Number(prompt('Height of Gihan? '));
// Gihan.weight = Number(prompt('Height of Gihan? '));

// Gihan.calBmi = function () {
//     this.bmi = this.weight / (this.height ** 2);

//     return this.bmi + ' yay';
// }

// Kasun.calBmi = function () {
//     Kasun.bmi = Kasun.weight / (Kasun.height ** 2);

//     return Kasun.bmi + ' pak';

// }

// console.log(Kasun);
// console.log(Gihan);
// Kasun.bmis =Gihan.calBmi();
// Gihan.bmis=Kasun.calBmi();
// if (Kasun.calBmi() > Gihan.calBmi()) {
//     console.log('Kasun has a greater BMI :' + Kasun.bmi);
// }
// else if (Kasun.calBmi() < Gihan.calBmi()) {
//     console.log('Gihan has a greater BMI :' + Gihan.bmi);
// }
// else {
//     console.log('Equal bmis');
// }

// // loooops
// ///llllllllllllllllllllllllllloooooooooooooooooooooppppppppppppppppsssssssssssssssss
// //for loop
// for (var a=0; a<=50; a++ ){ 
//     console.log(a);
// }

// //for in loop

// var vehicle = {
//     bus: 'tata',
//     car: 'toyota',
//     suv: 'honda',
// };

// for (a in vehicle) {
//     console.log(vehicle[a]);
// }


// //for of loop
// var name='gihan pererea';
// var a;
// for (a of name){
//     console.log(a);
// }

// //while loop
// var numbers=[30,55,66,33,44,99,88,77]
// var a =0;
// while(a<numbers.length){
//     console.log(numbers[a]);
//     a++;
// }

// //do while loop
// var a=20;
// do{
//     console.log(a);
//     a+=10;
// } while (a<=150);

// continue and break

// let a=['gihan','mahesha','evan', 1987, true,'math'];
// for(var b=0; b<a.length; b++){
//     //if(typeof(a[b]) !=="string") continue;
//     //console.log(a[b]);
//     if(typeof(a[b]) =="boolean") break;
//     console.log(a[b]);

// }

///////////////////////////////////////////////////////////////////////////////////////

///////////////////////error handaling////////////////////////////

//try catch

// function findLargest(a, b, c) {
//     try {
//         if (typeof (a) !== "number" || typeof (b) !== "number" || typeof (c) !== "number") {
//             throw "Error-input must be numbers";
//         }
//         else if (a == b || a == c || b == c) {
//             throw "Error- numbers can not be the same";
//         }
//         else {
//             if (a > b && a > c) {
//                 console.log('a is the largest');
//             }
//             else if (c < b && b > a) {
//                 console.log('b is the smallest');
//             }
//             else if (c > b && c > a) {
//                 console.log('c is the largest');
//             }
//             else{
//                 console.log('invalid');
//             }

//         }
//     } 
//     catch(err){
//         console.log(err);
//     }
//     finally{
//         console.log('inputs are '+a+','+b+','+c+'.');
//     }
// } 
// findLargest(5,4,6);


////////scope/////////////

///local & global

///local variables

// function subNum() {
//   var a=10;             //a and b are local values, can not use outside of the function.
//   var b=30;             // deleted after the function executed.
//   let c = a-b
//     console.log(c);
// }
// subNum();


///example 4///

// tip calculator practice
// const fast = new Object();
// const eat = new Object();


// // eat.bill1 = 1230,

// //     eat.bill2 = 1320;

// // eat.food.push("mango",'orange');

// eat.foodBill = function () {

//     eat.food = ['apple', 'banana'];
//     eat.food.push("mango", 'orange');
//     eat.bill1 = Number(prompt("Bill1?"));
//     eat.bill2 = Number(prompt("Bill2?"));
//     eat.a = eat.bill1 * eat.bill2;

//     if (eat.bill1 <= 1000 && eat.bill1 >= 100) {
//         eat.tip1 = eat.bill1 * .2;

//     }
//     else if (eat.bill1 > 1000 && eat.bill1 <= 1500) {
//         eat.tip1 = eat.bill1 * 0.1;
//     }
//     else {
//         eat.tip1 = 0;
//     }
//     if (eat.bill2 <= 1000 && eat.bill2 >= 100) {
//         eat.tip2 = eat.bill2 * .2;

//     }
//     else if (eat.bill2 > 1000 && eat.bill2 <= 1500) {
//         eat.tip2 = bill2 * 0.1;
//     }
//     else {
//         eat.tip2 = 0;
//     }
//     fast.tasmania = this.a;
//     eat.total = [this.a, 1526, 5636];
//     eat.total.push("Gona", fast.tasmania);
//     fast.tips = eat.tip1 + eat.tip2;





// }



// eat.foodBill();

// //  eat.total.shift();
// console.log(eat);
// console.log(fast);
// console.log('total tips are ' + fast.tips);

// tip calculator with loops//


const totals = new Object();

totals.bills = [];
totals.tips = [];
totals.final=[];

totals.tipCal = function () {
    for ( var a = 0; a < 2; a++) {
        this.bills[a] = parseInt(prompt('Enter Bill Values? '));

        //var b;
        //var c;
        if (this.bills[a] <= 1000) {
            b = this.bills[a] * 0.2;


        }
        else if (this.bills[a] > 1000 && this.bills[a] <= 1500) {
            b= this.bills[a] * 0.15;

        }
        else {
            b= this.bills[a] * 0.1;
        }
        this.tips.push(b);
            c= b+this.bills[a];
            this.final.push(c);
           

        
      
        //console.log(c);
    }
    


}
totals.tipCal();
console.log(totals);


//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//
//////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM////////DOM//DOM//DOM//


// var a=document.getElementById('ac');
// console.log(a);

// console.log(document.title);
// console.log(document.all);
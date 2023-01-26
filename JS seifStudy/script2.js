// console.log(document.getElementById('a1'));
// var k = document.getElementById('a1');
// console.log(k);

//text content// innertext//innerHTML//

// textcontent does not support styles// but innertext support styls as well//innerHTML supports html contents as well. see beloww eg//
// k.textContent='Add Shopping Items';
// console.log(k.textContent);
// k.innerText='Items';
// console.log(k.innerText);
// k.innerHTML='<i>HEllow</i> world';
// console.log(k.innerHTML);

//k.style.background= '#090209';
//k.style.color='#fff';

//pause at 1.11:24(
// var a = document.querySelector('#di1i1');


// console.log(a.parentNode);
// a.parentNode.innerText='A';

//pauzsrd at 1.40

//var a=10; b=20;
customerCount = Number(prompt("Number of customers"));
bill = [];
tips = [];
totals = [];
var final;
for (i = 0; i < customerCount; i++) {
    bill[i] = Number(prompt("Enter the bill no # " + (i + 1)));
}
function tipcal() {
    for (i = 0; i < customerCount; i++) {
        if (bill[i] <= 100) {
            tips[i] = bill[i] * 0.1;
        }
        else if (bill[i] >= 101 && bill[i] <= 200) {
            tips[i] = bill[i] * 0.2;
        }
        else if(bill[i]>=201){ tips[i] = bill[i] * 0.4; }
    }

}
tipcal(bill);
var previous = 0;
for (i = 0; i < customerCount; i++) {
    totals[i] = (bill[i] + tips[i]);
    
    final = (totals[i] + previous);
    previous = final;
}
console.log(bill, tips,totals);
console.log("Final total =  $" + " " + final)
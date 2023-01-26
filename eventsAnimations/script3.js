//events//
// event listener is the the best way to call an event in an HTML file
var b1 = document.getElementById('button1').addEventListener('click', function () {
    //alert("Gihan");
    this.style.backgroundColor = '#539ec9';
   this.style.objectPosition='left';
}

);
document.getElementById('button1').addEventListener('mouseout', function(){
    this.style.backgroundColor ='#c99e53';
});
document.getElementById('button1').addEventListener('mousemove', mouseCount);
function mouseCount(e){
    document.getElementById('mainr').style.backgroundColor ='rgb('+e.offsetX+','+e.offsetY+','+e.offsetY+')';
    console.log(e.type);
}
document.getElementById('firstHalf').addEventListener('mouseenter', function(){
    document.getElementById('firstHalf').style.marginRight ="51%";
    this.style.opacity= '100%';
});
document.getElementById('secondHalf').addEventListener('mouseenter', function(){
    document.getElementById('secondHalf').style.marginLeft ="51%";
    this.style.opacity= '100%';
});
document.getElementById('firstHalf').addEventListener('mouseleave', function(){
    document.getElementById('firstHalf').style.marginRight ="52%";
    this.style.opacity= '70%';
});
document.getElementById('secondHalf').addEventListener('mouseleave', function(){
    document.getElementById('secondHalf').style.marginLeft ="52%";
    this.style.opacity= '70%';
});
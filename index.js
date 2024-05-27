var num1=Math.random(); 
num1=6*num1; 
number1 =Math.floor(num1+1); 

if(number1===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png"); 
}else if(number1===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png"); 
}else if(number1===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png"); 
}else if(number1===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png"); 
}else if(number1===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png"); 
}else if(number1===6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png"); 
}
var num2=Math.random(); 
num2=6*num2; 
number2 =Math.floor(num2+1); 

if(number2===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png"); 
}else if(number2===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png"); 
}else if(number2===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png"); 
}else if(number2===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png"); 
}else if(number2===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png"); 
}else if(number2===6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png"); 
}
if(number1>number2){
     document.querySelector("h1").innerHTML="Player 1 wins 😊"; 
}else if(number1<number2){
    document.querySelector("h1").innerHTML="Player 2 wins 🤌"; 
}else {
    document.querySelector("h1").innerHTML="Draw 🙃"; 

}
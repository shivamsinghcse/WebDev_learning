let num1 = Math.floor(Math.random()*6+1);
document.getElementById("img1").setAttribute("src",`images/dice${num1}.png`);
let num2 = Math.floor(Math.random()*6+1);
document.getElementById("img2").setAttribute("src",`images/dice${num2}.png`);
if(num1>num2){
    document.querySelector("h1").innerHTML="Player1 wins 🚩"
}
else if(num1< num2){
    document.querySelector("h1").innerHTML="Player2 wins 🚩"
}
else if(num1 = num2){
    document.querySelector("h1").innerHTML="Draw 🤝"

}
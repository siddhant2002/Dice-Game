// var nm = prompt("Enter Your Name");

// document.querySelector("h1").innerHTML = "Helio "+nm+" Welcome to Dice Game. Refresh Me!!!";

var ran1 = Math.floor(Math.random() * 6) + 1;
var img = "dice"+ran1+".png";
var src = "/images/"+img;
document.querySelectorAll("img")[0].setAttribute("src",src);

var ran2 = Math.floor(Math.random() * 6) + 1;
var img1 = "dice"+ran2+".png";
var src1 = "/images/"+img1;
document.querySelectorAll("img")[1].setAttribute("src",src1);

if(ran1 > ran2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if(ran1 < ran2)
{
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!!";
}
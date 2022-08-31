var sco = localStorage.getItem("score");
var count = sco.substring(0,sco.indexOf("+"));
var count1 = sco.substring(sco.indexOf("+")); 
alert(count+" "+count1);
if(count > count1)
{
    document.querySelector("h1").innerHTML="You Won🥳🥳🥳🥳";
}
else if(count < count1)
{
    document.querySelector("h1").innerHTML="You Lost😟😟😟😟";
}
else
{
    document.querySelector("h1").innerHTML="Draw!!!";
}
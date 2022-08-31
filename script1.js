document.getElementById("para").innerHTML=localStorage.getItem("name-item");
var count = 0;
var count1 = 0;

function dotask1() {
  var ran1 = Math.floor(Math.random() * 6) + 1;
  var img = "dice" + ran1 + ".png";
  var src = "/images/" + img;
  document.querySelectorAll("img")[0].setAttribute("src", src);

  var ran2 = Math.floor(Math.random() * 6) + 1;
  var img1 = "dice" + ran2 + ".png";
  var src1 = "/images/" + img1;
  document.querySelectorAll("img")[1].setAttribute("src", src1);

  if (ran1 > ran2) {
    count++;
  } else if (ran1 < ran2) {
    count1++;
  }
  console.log(count+" "+count1);
}
function dotask2() {
  var sco=count+"+"+count1;
  localStorage.setItem("score",sco);
  location.href = 'third.html';
}

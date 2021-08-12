const maria = document.querySelector("#maria"),
  tiago = document.querySelector("#tiago"),
  buffy = document.querySelector("#buffy");
const mDisplay = document.querySelector("#mDisplay"),
  tDisplay = document.querySelector("#tDisplay"),
  bDisplay = document.querySelector("#bDisplay");
let mCount = 0,
  tCount = 0,
  bCount = 0;

//Maria on click then reset
function mClick() {
  if (mCount % 2 === 0) {
    mDisplay.innerText = "You clicked María";
  } else {
    mDisplay.innerText = "Founder";
  }
  mCount++;
}
//Tiago on click then reset
function tClick() {
  if (tCount % 2 === 0) {
    tDisplay.innerText = "You clicked Tiago";
  } else {
    tDisplay.innerText = "CCO";
  }
  tCount++;
}
//Buffy on click then reset
function bClick() {
  if (bCount % 2 === 0) {
    bDisplay.innerText = "You clicked Buffy";
  } else {
    bDisplay.innerText = "CTO";
  }
  bCount++;
}

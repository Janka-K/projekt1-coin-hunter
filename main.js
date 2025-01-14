// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program

let startPosition = 50;

let sizeValuePct = "%";
let sizeValuePx = "px";
let stepValueRight = 10;
let stepValueLeft = -10;

let gameSound = "hudba";
let coinSound = "zvukmince";
let fanfareSound = "zvukfanfara";

let count = 0;

startGame();

coinMove();

function startGame() {
  count = 0;
  let startPositionX = (document.getElementById("panacek").style.left =
    String(startPosition) + sizeValuePct);
  let startPositionY = (document.getElementById("panacek").style.top =
    String(startPosition) + sizeValuePct);
  let startDirection = (document.getElementById("panacek").src =
    "obrazky/panacek.png");
  let score = (document.getElementById("score").innerHTML = count);
  let music = document.getElementById(gameSound).load();

  return startPositionX, startPositionY;
}

function getActualPosition() {
  return document.getElementById("panacek").getBoundingClientRect(); //metoda vraci vice nez jednu hodnotu!!!
}

function move(e) {
  e = e || window.event;
  let makeStep;
  let panacekX = document.getElementById("panacek").getBoundingClientRect().x;
  let panacekY = document.getElementById("panacek").getBoundingClientRect().y;
  let panacekWidth = document
    .getElementById("panacek")
    .getBoundingClientRect().width;
  let panacekHeight = document
    .getElementById("panacek")
    .getBoundingClientRect().height;
  let minceX = document.getElementById("mince").getBoundingClientRect().x;
  let minceY = document.getElementById("mince").getBoundingClientRect().y;
  let minceHeight = document
    .getElementById("mince")
    .getBoundingClientRect().height;
  let minceWidth = document
    .getElementById("mince")
    .getBoundingClientRect().width;
  if (e.keyCode === 37) {
    let makeDirection = (document.getElementById("panacek").src =
      "obrazky/panacek-vlevo.png");
    if (getActualPosition().left <= 0) {
      makeStep = document.getElementById("panacek").style.left =
        0 + sizeValuePx;
    } else {
      makeStep = document.getElementById("panacek").style.left =
        getActualPosition().left + stepValueLeft + sizeValuePx;
    }
  } else if (e.keyCode === 39) {
    let makeDirection = (document.getElementById("panacek").src =
      "obrazky/panacek-vpravo.png");
    if (getActualPosition().right < window.innerWidth) {
      makeStep = document.getElementById("panacek").style.left =
        getActualPosition().left + stepValueRight + sizeValuePx;
    }
  } else if (e.keyCode === 38) {
    let makeDirection = (document.getElementById("panacek").src =
      "obrazky/panacek-nahoru.png");
    if (getActualPosition().top <= 0) {
      makeStep = document.getElementById("panacek").style.top = 0 + sizeValuePx;
    } else {
      makeStep = document.getElementById("panacek").style.top =
        getActualPosition().top + stepValueLeft + sizeValuePx;
    }
  } else if (e.keyCode === 40) {
    let makeDirection = (document.getElementById("panacek").src =
      "obrazky/panacek.png");
    if (getActualPosition().bottom < window.innerHeight) {
      makeStep = document.getElementById("panacek").style.top =
        getActualPosition().top + stepValueRight + sizeValuePx;
    }
  }

  if (
    !(
      panacekX + panacekWidth < minceX ||
      minceX + minceWidth < panacekX ||
      panacekY + panacekHeight < minceY ||
      minceY + minceHeight < panacekY
    )
  ) {
    scoreCount();
    playSound(coinSound);
    coinMove();
  } else if (count === 2) {
    alert("Jsi borec, nasbiral(a) jsi plny pocet bodu a vyhral(a) jsi!");
    startGame();
  }

  playSound(gameSound);
}

function coinRandomPositionX() {
  return Math.floor(Math.random() * window.innerWidth + 1);
}

function coinRandomPositionY() {
  return Math.floor(Math.random() * window.innerHeight + 1);
}

//funkce vygeneruje minci na nahodne pozici

function coinMove() {
  let moveX = (document.getElementById("mince").style.left =
    coinRandomPositionX() + sizeValuePx);
  let moveY = (document.getElementById("mince").style.top =
    coinRandomPositionY() + sizeValuePx);
}

//funkce vyvola hudbu na pozadi, prehraje zvuk mince pri jejim sebrani panackem //

function playSound(elementId) {
  let music = document.getElementById(elementId);
  music.play();
}

function scoreCount() {
  count = count + 1;
  let score = (document.getElementById("score").innerHTML = count);
  if (count === 5) {
    playSound(fanfareSound);
  }
}

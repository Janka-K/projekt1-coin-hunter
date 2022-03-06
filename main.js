// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program


let xIndex = 50;
let yIndex = 50;

let sizeValuePct = "%";
let sizeValuePx = "px";
let stepValueRight = 10;
let stepValueLeft = -10;


let gameSound = "hudba";
let coinSound = "zvukmince";


let startPositionX = document.getElementById("panacek").style.left = String(xIndex) + sizeValuePct;
let startPositionY = document.getElementById("panacek").style.top = String(yIndex) + sizeValuePct;

coinMove();


function getActualPosition() {
	return document.getElementById("panacek").getBoundingClientRect(); //metoda vraci vice nez jednu hodnotu!!!	
}


function move(e) {
	e = e || window.event;
	let makeStep;
	let panacekX = document.getElementById("panacek").getBoundingClientRect().x;
	let panacekY = document.getElementById("panacek").getBoundingClientRect().y;
	let panacekWidth = document.getElementById("panacek").getBoundingClientRect().width;
	let panacekHeight = document.getElementById("panacek").getBoundingClientRect().height;
	let minceX = document.getElementById("mince").getBoundingClientRect().x;
	let minceY = document.getElementById("mince").getBoundingClientRect().y;
	let minceHeight = document.getElementById("mince").getBoundingClientRect().height;
	let minceWidth = document.getElementById("mince").getBoundingClientRect().width;
	if (e.keyCode === 37) {
		if (getActualPosition().left <= 0) {
			makeStep = document.getElementById("panacek").style.left = 0 + sizeValuePx;
		} else {
			makeStep = document.getElementById("panacek").style.left = getActualPosition().left + stepValueLeft + sizeValuePx;
		}
	} else if (e.keyCode === 39) {
		if (getActualPosition().right < window.innerWidth){
			makeStep = document.getElementById("panacek").style.left = getActualPosition().left + stepValueRight + sizeValuePx;
		}
			
		
	} else if (e.keyCode === 38) {
		if (getActualPosition().top <= 0) {
			makeStep = document.getElementById("panacek").style.top = 0 + sizeValuePx;
		} else {
			makeStep = document.getElementById("panacek").style.top = getActualPosition().top + stepValueLeft + sizeValuePx;
		}

	} else if (e.keyCode === 40) {
		if(getActualPosition().bottom < window.innerHeight){
			makeStep = document.getElementById("panacek").style.top = getActualPosition().top + stepValueRight + sizeValuePx;

		}
		

	}

	if (!(panacekX + panacekWidth < minceX || minceX + minceWidth < panacekX || panacekY + panacekHeight < minceY || minceY + minceHeight < panacekY)) {
		playSound(coinSound);
		coinMove();
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
	let moveX = document.getElementById("mince").style.left = coinRandomPositionX() + sizeValuePx;
	let moveY = document.getElementById("mince").style.top = coinRandomPositionY() + sizeValuePx;

}


//funkce vyvola hudbu na pozadi, prehraje zvuk mince pri jejim sebrani panackem //

function playSound(elementId) {
	let music = document.getElementById(elementId);
	music.play();
}



/*Při každém pohybu testujeme, zda se panáček neprotíná s mincí - v JS připravená podmínka pro průnik dvou obdélníků.**
/*if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
*/













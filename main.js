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
let stepValueRight = 50;
let stepValueLeft = -50;

let startPositionX= document.getElementById("panacek").style.left = String(xIndex) + sizeValuePct;
let startpositionY = document.getElementById("panacek").style.top = String(yIndex) + sizeValuePct;

let coinPositionX = document.getElementById("mince").style.left = coinRandomPositionX() + sizeValuePx;
let coinPositionY = document.getElementById("mince").style.top = coinRandomPositionY() + sizeValuePx;



function getActualPosition(){
	return document.getElementById("panacek").getBoundingClientRect(); //metoda vraci vice nez jednu hodnotu!!!	
}


function move(e){
	e = e || window.event;
	let makeStep;
	if (e.keyCode === 37){
		if (getActualPosition().left <= 0){
			makeStep = document.getElementById("panacek").style.left = 0 + sizeValuePx;
		}else{
			makeStep = document.getElementById("panacek").style.left = getActualPosition().left + stepValueLeft + sizeValuePx;
		}
	}else if (e.keyCode === 39){
		makeStep = document.getElementById("panacek").style.left = getActualPosition().left + stepValueRight + sizeValuePx;
	}else if (e.keyCode === 38){
		if (getActualPosition().top <= 0){
			makeStep = document.getElementById("panacek").style.top = 0 + sizeValuePx;
		}else {
			makeStep = document.getElementById("panacek").style.top = getActualPosition().top + stepValueLeft + sizeValuePx;
		}
	
	}else if (e.keyCode === 40){
		makeStep = document.getElementById("panacek").style.top = getActualPosition().top +stepValueRight + sizeValuePx;
		console.log(makeStep);
	}
}


function coinRandomPositionX(){
	return Math.floor(Math.random() * window.innerWidth + 1);

}

function coinRandomPositionY(){
	return Math.floor(Math.random() * window.innerHeight + 1);
}





/* je potreba doresit **Při každém pohybu testujeme, zda se panáček neprotíná s mincí - v JS připravená podmínka pro průnik dvou obdélníků.**
/*if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {

*/

















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
let stepValueRight = 100;
let stepValueLeft = -100;

let startPositionX= document.getElementById("panacek").style.left = String(xIndex) + sizeValuePct;
let startpositionY = document.getElementById("panacek").style.top = String(yIndex) + sizeValuePct;


let test = window.innerWidth;
let test1 = window.innerHeight;

console.log(test)
console.log(test1)

function getActualPosition(){
	return document.getElementById("panacek").getBoundingClientRect();	
}


function move(e){
	e = e || window.event;
	if (e.keyCode === 37){
		let makeStep = document.getElementById("panacek").style.left = getActualPosition().left + stepValueLeft + sizeValuePx;
	}else if (e.keyCode === 39){
		let makeStep = document.getElementById("panacek").style.left = getActualPosition().left + stepValueRight + sizeValuePx;
	}else if (e.keyCode === 38){
		let makeStep = document.getElementById("panacek").style.top = getActualPosition().top + stepValueLeft + sizeValuePx;
	}else if (e.keyCode === 40){
		let makeStep = document.getElementById("panacek").style.top = getActualPosition().top +stepValueRight + sizeValuePx;
	}
}


























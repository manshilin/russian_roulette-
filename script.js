/* 
1. При нажатии на кнопку "Начать"
	1.1. Сделать кнопку неактивной - done
	1.2. Вставить патрон в барабан - done
	1.3. Начать крутить барабан
	1.4. Скрыть пулю - done
	1.5. Записать случайное число 1 - 6 , это число отвечает за место пули в барабане - done
	1.6. Отобразить револьвер - done
	1.7. Изменить текст кнопки на "Сделать выстрел" - done
	1.8. Сделать кнопку активной
2. При нажатии на кнопку "Сделать выстрел" - done
	2.1. Проверяется число выстрела - done
	2.2. Если пуля совпадает с чилом барабана, то персонаж убит -done
	2.3. Иначе револьвер переворачивается и далее повторяется п.2 - done
	2.4. При успешном выстреле залить соотвествующую иконку красной краской
	2.5. Покрутить барабан
3. При завершении игры
	3.1. Изменить текст кнопки на "Рестарт" - done
	3.2. При нажатии на эту кнопку перезагрузить страницу -done
*/
let countShot = 0;
let bulletPosition = random(1,6); //позиция патрона в барабане
let btnshot = document.querySelector("#shot");
let currentPlayer = 1;

btnshot.onclick = start;

	//Первый клип по кнопке "Начать"
 function start (){
 	btnshot.className = "off";
 	let bullet = document.querySelector("#bullet");
 	let revolver = document.querySelector("#revolver");
 	let baraban = document.querySelector("#baraban");
 	revolver.style.display = "block";
	bullet.style.display = "block";

	btnshot.onclick = "";

	let rotate = 0;//вращение барабана
	
	let timer = setInterval(function(){
		
		rotate = rotate + 10;
		baraban.style.transform = "rotate("+ rotate + "deg)";
		if(rotate > 300){
			bullet.style.display = "none";
		}
		
		if(rotate == 720) {
			clearInterval(timer);
			btnshot.onclick = shot;
			btnshot.innerText = "Сделать выстрел";
			btnshot.className ="";
		}
	}, 50);
	
	
 }
function random(min,max) {
	return Math.floor(Math.random() * (max-min) + min );
}
 
// выстрел
let rotateBaraban = 0;
function shot(){
	countShot = countShot + 1;
	if (bulletPosition == countShot) {
		let blood = document.createElement("div");
			blood.id = "blood";
		let player = document.querySelector("#player"+currentPlayer);
			player.appendChild(blood);
			blood.className = ("player" + currentPlayer);

		gameEnd();
		
	} 
	else 
		{ if (currentPlayer == 1) {
			rotationRight ();
			currentPlayer = 2;
	} else {
			rotationLeft();
			currentPlayer = 1;
	}
	}
	let rotate = rotateBaraban;
	let timer = setInterval(function () {
			rotate = rotate + 10;
			if(rotate == rotateBaraban + 60) 
			{
				clearInterval(timer);
				rotateBaraban = rotate;
			}
	
	baraban.style.transform = "rotate("+ rotate +"deg)";
	},100)
		
}

function rotationRight () {
	revolver.style.background = 'url("images/revolver-right.png") no-repeat'
}

function rotationLeft () {
	revolver.style.background = 'url("images/revolver-left.png") no-repeat'
}

function gameEnd() {
	btnshot.innerText = "Рестарт";
	alert("Game over!!!");
	btnshot.onclick = reload;
}

function reload(){
	location.reload();
}
var root = document.getElementById('root')
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var pantalla = document.getElementById("pantalla")



function Screen(color){
	this.color = color;


	this.redIncrease = function(){
		pantalla.style.width = '35%'
		pantalla.style.height = '150px';
		pantalla.style.backgroundColor = color
	}

	this.blueIncrease = function(){
		pantalla.style.width = '45%'
		pantalla.style.height = '200px'
		pantalla.style.backgroundColor = color
	}

	this.greenDecrease = function(){
		pantalla.style.width = '25%'
		pantalla.style.height = '100px'
		pantalla.style.backgroundColor = color
	}
}

var s1 = new Screen('red')
var s2 = new Screen('blue')
var s3 = new Screen('green')
button1.addEventListener('click', s1.redIncrease)
button2.addEventListener('click', s2.blueIncrease)
button3.addEventListener('click', s3.greenDecrease)

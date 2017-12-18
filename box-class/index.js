var root = document.getElementById('root')
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var pantalla = document.getElementById("pantalla")


class Screen{
	constructor(color){
		this.color = color;
	}

	redIncrease(){
	pantalla.style.backgroundColor = this.color;
	pantalla.style.width = '35%'
 	pantalla.style.height = '150px';
	}

	blueIncrease(){
	pantalla.style.backgroundColor = this.color;
	pantalla.style.width = '45%'
 	pantalla.style.height = '200px';
	}

	greenDecrease(){
	pantalla.style.backgroundColor = this.color;
	pantalla.style.width = '25%'
 	pantalla.style.height = '100px';
	}

}

var s1 = new Screen('red')
var s2 = new Screen('blue')
var s3 = new Screen('green')

button1.addEventListener('click', function(){
	s1.redIncrease()
});
button2.addEventListener('click', function(){
	s2.blueIncrease()
});
button3.addEventListener('click', function(){
	s3.greenDecrease()
})


// "use strict";

// Food is a base class
// class Food {
//     constructor (name) {
//         this.name = name;
//     }


//     print () {
//       console.log(this.name)
//     }
// }

// var chicken_breast = new Food('beans');

// chicken_breast.print(); 






















var name1 =prompt("ESCRIBE EL NOMBRE DEL PLAYER 1");
var name2 =prompt("ESCRIBE EL NOMBRE DEL PLAYER 2");
alert(name1+"   "+"vs"+"   "+name2);

var play1 =prompt(name1+"  "+"ELIGE\n piedra\n papel\n tijera\n");
var play2 =prompt(name2+"  "+"ELIGE\n piedra\n papel\n tijera\n");

if (play1 == "piedra" && play2 == "papel"){
	alert("GANADOR\n"+" "+name2);
}else if (play1 == "papel" && play2 == "piedra"){
	   alert("GANADOR\n"+" "+name1);
}else if (play1 == "tijera" && play2 == "papel"){
	   alert("GANADOR\n"+" "+name1);
}else if (play1 == "piedra" && play2 == "tijera"){
	   alert("GANADOR\n"+" "+name1);
}else if (play1 == "papel" && play2 == "tijera"){
	   alert("GANADOR\n"+" "+name2);
}else if (play1 == "tijera" && play2 == "piedra"){
	   alert("GANADOR\n"+" "+name1);
}else if (play1 == "papel" && play2 == "papel"){
	   alert("EMPATE");
}else if (play1 == "piedra" && play2 == "piedra"){
	   alert("EMPATE");
}else if (play1 == "tijera" && play2 == "tijera"){
	   alert("EMPATE");
};